import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    /* Method to convert income to dollar format */
    getIncomeInDollars: (income) => `$${income}`,
    /* Method to convert income to euro format */
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
