'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const Product = require('../server/db/models/product')
const Category = require('../server/db/models/category')
const ProductCategory = require('../server/db/models/productCategory')
const faker = require('faker')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
    // fakerUsers.map(() => {}) // Do something here
  ])

  const productArray = [
    Product.create({
      name: 'Bagel',
      description:
        'Ring-shaped, usually with a dense, chewy interior; usually topped with sesame or poppy seeds baked into the surface.',
      imageUrl: '/images/bagel.png',
      price: 2.35,
      inventoryQuantity: 4
    }),
    Product.create({
      name: 'Baguette',
      description:
        'Thin elongated loaf, made of water, flour, yeast, and salt, instantly recognizable by slits cut in top surface before baking to allow gas expansion.',
      imageUrl: '/images/baguette.png',
      // imageUrl: '../images/baguette.png',
      price: 5.0,
      inventoryQuantity: 10
    }),
    Product.create({
      name: 'Birthday Cake',
      description:
        'A birthday cake is a cake eaten as part of a birthday celebration in many world traditions. Variations of the typical birthday cake include birthday cupcakes, cake pops, pastries, and tarts. Birthday cakes are often vanilla-, chocolate-, or strawberry-flavored.',
      imageUrl: '../images/birthday-cake.png',
      price: 20.0,
      inventoryQuantity: 8
    }),
    Product.create({
      name: 'Cookie',
      description:
        'A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.',
      imageUrl: '../images/cookie.png',
      price: 3.0,
      inventoryQuantity: 30
    }),
    Product.create({
      name: 'Doughnut',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/doughnut.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Biscuit',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/biscuit.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Burger',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/burger.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cheesecake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cheesecake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cherry Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cherrycake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cherry Pie',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cherrypie.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Chocolate Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/chocolatecake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Chocolate Tier Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/chocolatetier.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Croissant',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/croissant.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Cupcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/cupcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Flatbread',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/flatbread.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Funcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/funcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Gingerbread',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/gingerbread.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Heartcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/heartcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Hotdog',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/hotdog.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Flatbread',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/flatbread.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Meat Sandwich',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/meatsandwich.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Mooncake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/mooncake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Pancake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/pancake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Pizza',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/pizza.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Pretzel',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/pretzel.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Sandwich',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/sandwich.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Submarine',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/sub.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Shortcake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/shortcake.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Tortillas',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/tortillas.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Tomato Sandwich',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/tomatosandwich.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Wholegrain Loaf',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/wholegrain.png',
      price: 2.0,
      inventoryQuantity: 15
    }),
    Product.create({
      name: 'Strawberry Cake',
      description:
        'A doughnut (British English) or donut (American English) is a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack.',
      imageUrl: '/images/strawberrycake.png',
      price: 2.0,
      inventoryQuantity: 15
    })
  ]
  for (let i = 0; i < 995; i++) {
    productArray.push(
      Product.create({
        name: faker.random.word(),
        description: faker.lorem.paragraph(),
        imageUrl: '/images/bagel.png',
        // imageUrl: faker.image.food(),
        price: faker.commerce.price(),
        inventoryQuantity: Math.floor(Math.random() * Math.floor(6))
      })
    )
  }

  const categories = await Promise.all([
    Category.create({name: 'yeast bread'}),
    Category.create({name: 'flatbread'}),
    Category.create({name: 'bun'}),
    Category.create({name: 'sweet bread'}),
    Category.create({name: 'crispy bread'})
  ])

  const products = await Promise.all(productArray)

  const productCategoryArray = []
  for (let i = 1; i <= 1000; i++) {
    productCategoryArray.push(
      ProductCategory.create({
        productId: i,
        categoryId: Math.ceil(Math.random() * Math.floor(5))
      })
    )
  }
  await Promise.all(productCategoryArray)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
