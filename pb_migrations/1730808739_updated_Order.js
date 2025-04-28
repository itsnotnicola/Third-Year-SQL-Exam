/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wrac69ch0m8ypx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urf7uu1p",
    "name": "cust_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "uobe8xkty0notg0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wrac69ch0m8ypx")

  // remove
  collection.schema.removeField("urf7uu1p")

  return dao.saveCollection(collection)
})
