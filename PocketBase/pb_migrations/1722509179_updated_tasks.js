/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqlcn2w6izorocz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrtiiugl",
    "name": "done",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqlcn2w6izorocz")

  // remove
  collection.schema.removeField("zrtiiugl")

  return dao.saveCollection(collection)
})
