// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import testimonial from "./testimonial";
import brand from "./brand";
import skills from "./skills";
import experience from "./experience";
import work from "./work";
import workExperience from "./workExperience";
import contact from "./contact";
import about from "./about";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    brand,
    skills,
    experience,
    work,
    workExperience,
    contact,
    about,
    testimonial,
  ]),
});
