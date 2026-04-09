/*
Write a function upgradeUser that takes the user object and returns a new object where:

subscription.plan is changed to "premium"
subscription.active is changed to true
subscription.billing.amount is changed to 19.99

{
  name: "Bob",
  subscription: {
    plan: "premium",
    active: true,
    billing: {
      amount: 19.99,
      cycle: "monthly"
    }
  }
}
*/

const user = {
  name: "Bob",
  subscription: {
    plan: "basic",
    active: false,
    billing: {
      amount: 9.99,
      cycle: "monthly",
    },
  },
};


function upgradeUser(user) {
  return {
    ...user,
    subscription: {
      ...user.subscription,
      plan: "premium",
      active: true,
      billing: {
        ...user.subscription.billing,
        amount: 19.99,
      },
    },
  };
}


const result = upgradeUser(user);

console.log(result);