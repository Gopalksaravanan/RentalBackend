import fastify from "fastify";
import path from "path";
import pointOfView from "point-of-view"; // Import point-of-view
import handlebars from "handlebars"; // Import handlebars

const app = fastify({ logger: true });

// Register point-of-view plugin with Handlebars
app.register(pointOfView, {
  engine: {
    handlebars: handlebars, // Use handlebars as the template engine
  },
  includeViewExtension: true, // Automatically add `.hbs` or other extensions
  root: path.join(__dirname, "views"), // Set the views directory
});


