var ghpages = require("gh-pages");

ghpages.publish(
  "demo",
  { dotfiles: true, remove: "node_modules" },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  }
);
