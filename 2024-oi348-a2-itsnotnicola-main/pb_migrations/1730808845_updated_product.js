/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jnnoxudndczclu")

  collection.name = "Product"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3jnnoxudndczclu")

  collection.name = "product"

  return dao.saveCollection(collection)
})
