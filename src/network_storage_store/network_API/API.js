import {formatDate, isVideo} from '../../Helpers/CommonHelpers';
import {FormatDateYYYYMMDD} from '../../Helpers/FormatDatehelpers';
// import {getLocation} from '../../Helpers/GetLocation';
import ApiManager from './APIManager';
// import {Video} from 'react-native-compressor';

const ApiName = {
  1: 'excavation',
  2: 'vit',
  3: 'cement',
  4: 'loha',
  5: 'reti',
  6: 'dust',
  7: 'gitti',
  8: 'murum',
  9: 'plumbing',
  10: 'electric',
  11: 'tileContractor',
  12: 'wallPuttie',
  13: 'grill',
  14: 'painter',
  15: 'electrician',
  16: 'plumber',
  17: 'notInContract',
  18: 'labourContractor',
  19: 'tile',
};

export async function SignUpPostApi(data) {
  try {
    const result = await ApiManager.post('signup', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function LoginPostApi(data) {
  try {
    const result = await ApiManager.post('login', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function SendOtpPostApi(data) {
  try {
    const result = await ApiManager.post('otpPhone', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function EditProfilePostApi(formData) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('name', formData.Name);

    formDataobj.append('mobile_number', formData.MobileNumber);

    if (formData?.ProfileImage?.length) {
      formDataobj.append('image', {
        uri: formData?.ProfileImage[0]?.uri,
        type: formData?.ProfileImage[0]?.type,
        name: formData?.ProfileImage[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post('editProfile', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddVisitEntryPostApi(
  formData,
  supervision_sites_id,
  imageUri,
) {
  console.warn('data in APi', imageUri);
  try {
    const formDataobj = new FormData();
    formDataobj.append('amount', formData.Amount);

    formDataobj.append('supervision_sites_id', supervision_sites_id);

    if (imageUri) {
      formDataobj.append('image', {
        uri: imageUri.uri,
        type: imageUri.type,
        name: imageUri.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post('superVisit', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function AddUdharRecoveryPost(data) {
  try {
    const result = await ApiManager.post('recoverySave', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getProfileApi() {
  try {
    const result = await ApiManager.get('getProfile');
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getAccessApi() {
  try {
    const result = await ApiManager.get('checkPermission');
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getSupervisionSitesApi(params) {
  try {
    const result = await ApiManager.get('supervisionSite', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getEmployeesApi(params) {
  try {
    const result = await ApiManager.get('getEmployee', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getEmployeePermissionApi(params) {
  try {
    const result = await ApiManager.get('employeeHasPermissions', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getSitesPermissionApi(params) {
  try {
    const result = await ApiManager.get('siteForPermission', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getDevelopementSitesApi(params) {
  try {
    const result = await ApiManager.get('developmentSite', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getMaterialPriceApi(params) {
  try {
    const result = await ApiManager.get('getMaterial', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getImportantDateApi(params) {
  try {
    const result = await ApiManager.get('importantDateGet', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getPersonalBookApi(params) {
  try {
    const result = await ApiManager.get('personalbook', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getPersonalBookApi2(params) {
  try {
    const result = await ApiManager.get('personalDash', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getIndividualSupervisionSitesApi(params) {
  try {
    const result = await ApiManager.get('supervisionAttachment', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getDevelopmentSiteApi(params) {
  try {
    const result = await ApiManager.get('developmentSite', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getExtendedEssarApi(params) {
  try {
    const result = await ApiManager.get('getessu', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getExtendedEssarSingleFlatApi(params) {
  try {
    const result = await ApiManager.get('essarFlatDetails', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getPersonalDocumentApi(params) {
  try {
    const result = await ApiManager.get('userDocumentGet', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getDocumentApi(params) {
  try {
    const result = await ApiManager.get('subFolderDocument', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getExpensesApi(construction_supplies_id, params) {
  try {
    const result = await ApiManager.get(ApiName[construction_supplies_id], {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getExpenditureApi(params) {
  try {
    const result = await ApiManager.get('getExpenditure', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getExpenditureStatsApi(params) {
  try {
    const result = await ApiManager.get('devlopmentSiteDash', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function AddContractPostApi(formData) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('name', formData.SiteName);
    formDataobj.append('email', formData.Email);
    formDataobj.append('mobile_number', formData.PhoneNumber);
    formDataobj.append('location', formData.Location);
    formDataobj.append('deal_amount', formData.DealAmount);

    if (formData?.FinalContract) {
      formDataobj.append('final_contract', {
        uri: formData?.FinalContract?.uri,
        type: formData?.FinalContract?.type,
        name: formData?.FinalContract?.name,
      });
    }
    if (formData?.ExtendedContract) {
      formDataobj.append('extended_contract', {
        uri: formData?.ExtendedContract?.uri,
        type: formData?.ExtendedContract?.type,
        name: formData?.ExtendedContract?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('contractSite', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddDocumentPostApi(formData) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('name', formData.SiteName);
    formDataobj.append('email', formData.Email);
    formDataobj.append('mobile_number', formData.PhoneNumber);
    formDataobj.append('location', formData.Location);
    formDataobj.append('deal_amount', formData.DealAmount);

    if (formData?.FinalContract) {
      formDataobj.append('final_contract', {
        uri: formData?.FinalContract?.uri,
        type: formData?.FinalContract?.type,
        name: formData?.FinalContract?.name,
      });
    }
    if (formData?.ExtendedContract) {
      formDataobj.append('extended_contract', {
        uri: formData?.ExtendedContract?.uri,
        type: formData?.ExtendedContract?.type,
        name: formData?.ExtendedContract?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('contractSite', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function AddWorkingDrawingPostApi(formData, supervision_sites_id) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('supervision_sites_id', supervision_sites_id);
    formDataobj.append('drowing_name', formData?.DocumentName);
    // console.warn('id', supervision_sites_id);
    if (formData?.WorkingDrawing) {
      formDataobj.append('working_drowing', {
        uri: formData?.WorkingDrawing?.uri,
        type: formData?.WorkingDrawing?.type,
        name: formData?.WorkingDrawing?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post(
      'supervisionDrowingPost',
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddDealAttachmentPostApi(formData, supervision_sites_id) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('supervision_sites_id', supervision_sites_id);
    // console.warn('id', supervision_sites_id);
    if (formData?.DealAttachment) {
      formDataobj.append('deal_attachment', {
        uri: formData?.DealAttachment?.uri,
        type: formData?.DealAttachment?.type,
        name: formData?.DealAttachment?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post(
      'supervisionAttachmentPost',
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddEdtendedContractPostApi(formData, contract_sites_id) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('contract_id', contract_sites_id);
    if (formData?.DealAttachment) {
      formDataobj.append('extended_contract', {
        uri: formData?.DealAttachment?.uri,
        type: formData?.DealAttachment?.type,
        name: formData?.DealAttachment?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('extendedContract', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddAttachmentPostApi(
  formData,
  contract_site_id,
  DocumentID,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('id', DocumentID);
    if (formData?.Attachment) {
      formDataobj.append('document', {
        uri: formData?.Attachment?.uri,
        type: formData?.Attachment?.type,
        name: formData?.Attachment?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('constDocumentSingle', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch(error => {
      console.warn('Hellow', error);
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function AddSuperVisionSitePostApi(formData) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('name', formData.SiteName);
    formDataobj.append('email', formData.Email);
    formDataobj.append('mobile', formData.PhoneNumber);
    formDataobj.append('location', formData.Location);
    formDataobj.append('deal_amount', formData.DealAmount);

    if (formData?.FinalContract) {
      formDataobj.append('deal_attachment[0]', {
        uri: formData?.FinalContract?.uri,
        type: formData?.FinalContract?.type,
        name: formData?.FinalContract?.name,
      });
    }
    if (formData?.ExtendedContract) {
      formDataobj.append('working_drowing[0]', {
        uri: formData?.ExtendedContract?.uri,
        type: formData?.ExtendedContract?.type,
        name: formData?.ExtendedContract?.name,
      });
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('supervisionSite', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddKharchaPostApi(formData) {
  try {
    const data = {
      date: FormatDateYYYYMMDD(formData.Date),
      amount: formData.Amount,
      debited_from: formData.DebitedAccount,
      which_work: formData.WhereToSpend,
      type: 'daily_kharcha',
    };
    const result = await ApiManager.post('personalbook', data);
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddUchalPostApi(formData) {
  try {
    const data = {
      date: FormatDateYYYYMMDD(formData.Date),
      which_work: formData.WhichWork,
      who_take: formData.FromWhom,
      amount: formData.Amount,
      debited_from: formData.DebitedAccount,
      type: 'uchal',
    };
    const result = await ApiManager.post('personalbook', data);
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddUdharDiyePostApi(formData) {
  try {
    const data = {
      date: FormatDateYYYYMMDD(formData.Date),
      who_take: formData.WhoTake,
      mobile_number: formData.MobileNumber,
      return_date: FormatDateYYYYMMDD(formData.ReturnDate),
      amount: formData.Amount,
      debited_from: formData.DebitedAccount,
      type: 'udhar',
    };
    const result = await ApiManager.post('personalbook', data);
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddImportantdatesPostApi(formData) {
  try {
    const data = {
      date: FormatDateYYYYMMDD(formData.Date),
      work: formData.Work,
    };
    const result = await ApiManager.post('importantDate', data);
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function AddPersonalDocumentPostApi(formData, DocumentType) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('name', formData.DocumentName);

    if (formData?.File) {
      formDataobj.append('file', {
        uri: formData?.File?.uri,
        type: formData?.File?.type,
        name: formData?.File?.name,
      });
      formDataobj.append('type', formData?.File?.type);
    }

    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('userDocument', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function AddFileManagerPostApi(formData, DocumentType) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('name', formData.DocumentName);
    formDataobj.append('documentType', DocumentType);
    formDataobj.append('type', Type);
    if (formData?.File) {
      formDataobj.append('file', {
        uri: formData?.File?.uri,
        type: formData?.File?.type,
        name: formData?.File?.name,
      });
    }
    formDataobj.append('Content-Type', 'application/pdf');

    const result = await ApiManager.post('userDocument', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
export async function getContractsApi(params) {
  try {
    const result = await ApiManager.get('contractSite', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function getVisitEntryApi(params) {
  try {
    const result = await ApiManager.get('superVisitGet', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}
export async function getConstructionSupplier(params) {
  try {
    const result = await ApiManager.get('constructionSupplierGet', {
      params: params,
    });
    return result;
  } catch (error) {
    return error?.response;
  }
}

const CONTRACT_SITE_ID = 'contract_site_id';
const CONSTRUCTION_SUPPLIES_ID = 'construction_supplies_id';
const DATE = 'date';
const AMOUNT = 'amount';
const DEBIT_ACCOUNT_ID = 'debit_account_id';
const PAYMENT_STATUS = 'payment_status';
const PAYMENT_METHOD = 'payment_method';
const OTHERNAME = 'other_name';

export async function AddOther_Expanditure(formData, development_site_id) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('development_id', development_site_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      'debited_id',
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('name', formData.Name);
    formDataobj.append('bill_no', formData.BillNumber);
    if (formData?.Photo?.length) {
      formDataobj.append('attachment', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post('expenditure', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddContract_Other_Excavation(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddVIT(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('quantity', formData.Quantity);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddCement(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    formDataobj.append('rate', formData.Rate);
    formDataobj.append('bags', formData.Bags);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('quantity', formData.Quantity);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddLoha(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('name[0]', '5mm');
    formDataobj.append('rate[0]', formData.Rate5mm);
    formDataobj.append('quantity[0]', formData.Quantity5mm);

    formDataobj.append('name[1]', '10mm');
    formDataobj.append('rate[1]', formData.Rate10mm);
    formDataobj.append('quantity[1]', formData.Quantity10mm);

    formDataobj.append('name[2]', '12mm');
    formDataobj.append('rate[2]', formData.Rate12mm);
    formDataobj.append('quantity[2]', formData.Quantity12mm);

    formDataobj.append('name[3]', '20mm');
    formDataobj.append('rate[3]', formData.Rate20mm);
    formDataobj.append('quantity[3]', formData.Quantity20mm);

    if (formData.Othermm) {
      formDataobj.append('name[4]', formData.Othermm);
      formDataobj.append('rate[4]', formData.RateOthermm);
      formDataobj.append('quantity[4]', formData.QuantityOthermm);
    }

    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddRetiDustGittiMurum(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('brass', formData.Brass);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddPlumbingElectricMaterialWallputtyColor(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddTilesContractor(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('labour_quantity', formData.LabourQuantity);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddGrillRailingWelder(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    formDataobj.append('running_ft', formData.Running);
    formDataobj.append('quantity', formData.Kg);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddNotInContract(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('hardware_name', formData.Name);
    formDataobj.append('bill_number', formData.BillNumber);
    formDataobj.append('hamali', formData.GadiBhadeHamali);
    formDataobj.append('karagir_quantity', formData.KaragirQuantity);
    formDataobj.append('helper_quantity', formData.HelperQuentity);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function AddLaborContractor(
  formData,
  contract_site_id,
  construction_supplies_id,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append(CONTRACT_SITE_ID, contract_site_id);
    formDataobj.append(CONSTRUCTION_SUPPLIES_ID, construction_supplies_id);
    formDataobj.append(DATE, FormatDateYYYYMMDD(formData.Date));
    formDataobj.append(AMOUNT, formData.Amount);
    formDataobj.append(
      DEBIT_ACCOUNT_ID,
      formData.DebitedAccountID == 9999 ? '' : formData.DebitedAccountID,
    );
    formDataobj.append(
      OTHERNAME,
      formData.DebitedAccountID == 9999 ? formData.OtherName : '',
    );
    formDataobj.append(PAYMENT_STATUS, formData.AmountStatus == 1 ? 1 : 0);
    if (formData.PaidBy == 1) {
      formDataobj.append(PAYMENT_METHOD, 'Cash');
    }
    if (formData.PaidBy == 2) {
      formDataobj.append(PAYMENT_METHOD, 'Check');
    }

    // ?? NOT COMMON
    formDataobj.append('worker_name', formData.Name);
    formDataobj.append('karagir_quantity', formData.KaragirQuantity);
    formDataobj.append('helper_quantity', formData.HelperQuentity);
    if (formData?.Photo?.length) {
      formDataobj.append('bill', {
        uri: formData?.Photo[0]?.uri,
        type: formData?.Photo[0]?.type,
        name: formData?.Photo[0]?.fileName,
      });
    }

    formDataobj.append('Content-Type', 'image/jpeg');

    const result = await ApiManager.post(
      ApiName[construction_supplies_id],
      formDataobj,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function SaveSearchPostApi(data) {
  try {
    const result = await ApiManager.post('saveSearch', data);
    return result;
  } catch (error) {
    return error?.response;
  }
}

export async function SaveUserSelectedOptionsPostApi(user_id, Options) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('user_id', user_id);
    if (Options && Array.isArray(Options)) {
      Options.forEach((option, index) => {
        formDataobj.append(`permission_id[${index}]`, option);
      });
      if (!Options.length) {
        formDataobj.append('type', 'deleteAll');
      }
    }

    const result = await ApiManager.post('storePermission', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function SaveUserSelectedSitePermissionsPostApi(
  idfieldName,
  user_id,
  type,
  Options,
) {
  try {
    const formDataobj = new FormData();
    formDataobj.append('user_id', user_id);
    formDataobj.append('type', type);
    if (Options && Array.isArray(Options)) {
      Options.forEach((option, index) => {
        formDataobj.append(`${idfieldName}[${index}]`, option);
      });
      if (!Options.length) {
        formDataobj.append('delete', '1');
      }
    }

    const result = await ApiManager.post('sitePermissionStore', formDataobj, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}
