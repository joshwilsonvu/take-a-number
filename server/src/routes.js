module.exports = app => {

  // Handle POST to create a admin session (i.e. log on)
  app.post("/v1/session", (req, res) => {
    if (!req.body || !req.body.email || !req.body.password) {
      res.status(400).send({error: "Email and password required."});
      return;
    }
    let admin = app.admins.find(admin => admin.email === req.body.email);
    if (!admin || admin.password !== req.body.password) {
      res.status(401).send({error: "Incorrect email or password."});
      return;
    }
    res.status(201).send({
      email: admin.email
    });
  });

  // Handle POST to create a new admin account
  app.post("/v1/admin", (req, res) => {
    console.log(req.responseText);
    let data = req.body;
    if (
      !data ||
      !data.email ||
      !data.password ||
      !data.first_name ||
      !data.last_name
    ) {
      res.status(400).send({
        error: "Primary email, password, first name, last name required."
      });
      return;
    }
    let admin = app.admins.find(admin => admin.email === data.email);
    if (admin) {
      res.status(400).send({error: "Email already in use."});
      return;
    }
    let adminToAdd = _.pick(
      data,
      "email",
      "password",
      "first_name",
      "last_name",
      // TODO: include "image"
    );
    app.admins.push(adminToAdd);
    res.status(201).send({
      email: data.email
    });
  });

  // Handle GET to fetch admin information
  app.get("/v1/admin/:email", (req, res) => {
    const email = decodeURIComponent(req.params.email);
    let admin = app.admins.find(admin => admin.email === email);
    if (!admin) {
      res.status(404).send({error: "Unknown email address."});
    } else {
      admin = {
        email: admin.email,
        first_name: admin.first_name,
        last_name: admin.last_name
        // TODO: include "image"
      };
      res.status(200).send(admin);
    }
  });

  // Handle DELETE to remove an admin
  app.delete("/v1/admin", (req, res) => {
    let ind = app.admins.findIndex(admin => admin.email === req.params.email);
    if (ind !== -1) {
      app.admins.splice(ind, 1); // remove admin
      res.status(204).send();
    } else {
      res.status(404).send({error: "Unknown email address."})
    }
  });

  // Handle POST to create a new organization
  app.post("/v1/org", (req, res) => {
    let data = req.body;
    if (!data || !data.name) {
      // TODO add more fields
      res.status(400).send({error: "name field required"});
      return;
    }
    data.name = data.name.toLowerCase();
    let org = app.orgs.find(org => org.name === data.name);
    if (org) {
      res.status(400).send({error: "Organization name already in use."});
      return;
    }
    // TODO add data to org

    app.orgs.push(org);
    res.status(201).send({
      name: org.name
    });
  });

  // Handle GET to fetch org information
  app.get("/v1/org/", (req, res) => {
    let org = app.orgs.find(org => org.name === req.params.name);
    if (!org) {
      res.status(404).send({error: "Unknown organization name."});
    } else {
      res.status(200).send(org);
    }
  });

  // Handle DELETE to remove an organization
  app.delete("/v1/org/", (req, res) => {
    let ind = app.orgs.findIndex(org => org.name === req.params.name);
    if (ind !== -1) {
      app.orgs.splice(ind, 1); // remove admin
      res.status(204).send();
    } else {
      res.status(404).send({error: "Unknown organization name."})
    }
  });

  // Handle POST to search organizations
  app.post("/v1/org-search/", (req, res) => {
    let data = req.body;
    console.log(data);
    if (!data || !data.search) {
      res.status(400).send({error: "name field required"});
      return;
    }
    let orgs = app.orgs.map(org => org.name).filter(name => name.startsWith(data.search)).slice(0, 10);
    res.status(200).send(orgs);
  });
};
