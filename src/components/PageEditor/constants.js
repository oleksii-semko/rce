const innerSchema = {
    "type" : "object",
    "properties" : {
      "type" :  {
          "type" : "string"
      },
      "url" : {
        "type" : "string"
      },
      "imageURI" : {
          "type" : "string"
      },
      "text" : {
        "type" : "string"
      },
      "title" : {
        "type" : "string"
      },
      "leftToRight" : {
        "type" : "boolean"
      }
    },
    "required" : ["type"]
  }

  const mainSchema = {
    "type": "array",
    "items" : innerSchema
  }

  export {mainSchema};