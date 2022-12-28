# Writing Your First Cypress Tests

### Getting Started

---

```js
yarn [installs stuff]
yarn dev [starts the app]
yarn test [runs unit tests]
npx cypress open [runs cypress e2e tests]
```

---

This janky everything app has a little of everything - a TODO app and an e-commerce store where you can purchase stuff.

You can find an incomplete set of tests that you will need to flesh out.

Tests are created with react-testing-library and Cypress.

Cypress.io is a popular testing framework for doing end-to-end tests (e2e). e2e is basically a way to spin up an app in the browser and interact with it in the same way a user would.

**The benefit of this method over unit tests** is that you can truly test the functionality of your app as a whole rather than individual units. Now we can be sure that our components handle the API response, navigates between pages correctly, etc.

**Some of the pitfalls** of e2e is that tests can be brittle - meaning tests will often fail because of browser issues or the API taking a little longer than usual to respond or maybe a developer changed the placement of an element that you depend on for a test... whoops.

---

### TODOS

---

### # 1

---

Get the app runnng in your browser to begin and check out the ecommerce and todo pages by visiting

`http://localhost:3000/shop`

`http://localhost:3000/todos`

The TODO app fetches some data from a 3rd party API and displays it on the screen.

If a user clicks on a `Remove Button`, the item disappears.

There is a unit test but no e2e test! You need to write one.

**Step 1:** Under `cypress/e2e` add another file `todos.cy.ts` and create an e2e test which confirms that todos disappear when a user clicks on them.

**Step 2:** Making actual calls to the API may not be the best idea especially since we may run up against rate limits. Can you use the `cypress/fixtures` to use mock data?

---

### #2

---

Ok now that you have an e2e test running what about an integration test?

**Step 1:** Add a `productList.spec.tsx` file under `app/components/productList`

**Step 2:** The unit test should confirm that a user can click on items and increment the total. Basically exactly what the e2e test does. With a unit test you are free to use all sorts of incorrect data to test edge cases while e2e is mostly confined to what your server will return.
