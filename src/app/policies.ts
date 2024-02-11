export enum Policy {
    Bankrupt = 'If they have ever been bankrupt, they are ineligible for a loan',
    Monthly_Income = 'If their monthly income is outside of our acceptable range (30,000 to 150,000),they are ineligible for a loan',
    High_LoanAmount = 'If the requested loan amount is more than 4.5 times their yearly income, they are ineligible for a loan',
    Low_LoanAmount = 'If their requested loan amount is less than 100,000 or more than 3,000,000, they are ineligible for a loan',
    Down_Payment = 'If their down payment amount is less than 20% or more than 80% of the requested loan amount, they are ineligible for a loan',
    NecessaryProperty = 'If they do not have the necessary property documents ready, they are eligible, but we need to inform them of the steps needed to get their property documents in order.',
    Based_In_Karachi = 'If they are not based in Karachi, they are eligible, but it may take some time before we can operate in their city.',
    Meet_All_Criteria = 'If they meet all of our criteria, they are eligible, and we will contact them to schedule an appointment.'
  }
  