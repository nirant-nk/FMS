import ApiManager from './APIManager';

export async function getContractInformation(params) {
  try {
    const result = await ApiManager.get('contractSiteSingle', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function GetCreditsApi(params) {
  try {
    const result = await ApiManager.get('creadit', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getFloorPlans(params) {
  try {
    const result = await ApiManager.get('developmentSite', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getRecentSearchApi(params) {
  try {
    const result = await ApiManager.get('getRecentSearch', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getSortByListApi(params) {
  try {
    const result = await ApiManager.get('sortsite', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getContractIndividualExpensesPrintApi(params) {
  try {
    const result = await ApiManager.get('contractSitePrint', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getExpenditurePrintApi(params) {
  try {
    const result = await ApiManager.get('ExpenditurePrint', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getPersonalBookPrint(params) {
  try {
    const result = await ApiManager.get('personalPrint', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getSupervisionPrintApi(params) {
  try {
    const result = await ApiManager.get('supervisionPrint', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
