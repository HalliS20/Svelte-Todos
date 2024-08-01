/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqlcn2w6izorocz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i8xru04g",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqlcn2w6izorocz")

  // remove
  collection.schema.removeField("i8xru04g")

  return dao.saveCollection(collection)
})
