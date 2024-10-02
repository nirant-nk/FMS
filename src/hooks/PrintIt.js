import RNPrint from 'react-native-print';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {
  getContractIndividualExpensesPrintApi,
  getExpenditurePrintApi,
  getPersonalBookPrint,
  getSupervisionPrintApi,
} from '../network_storage_store/network_API/getApis';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {getExpenditureApi} from '../network_storage_store/network_API/API';

export const useExpanditurePrint = () => {
  const {CurrentDevelopementSiteDetails, Access} = useMyContext();

  const ExpenditurePrint = async () => {
    const res = await getExpenditureApi({
      development_id: CurrentDevelopementSiteDetails?.current?.id,
      type: 'print',
    });

    if (res?.status == 200) {
      if (!res?.data?.data?.print?.expense_pdf) {
        showMiniMessage({
          message: 'No File Found',
          type: 'info',
        });
      } else {
        await RNPrint.print({
          filePath:
            'https://realestate.profcymabackend.com/' +
            res?.data?.data?.print?.expense_pdf,
        });
      }
    } else {
      showMiniMessage({
        message: 'Something Went Wrong Please Try Again',
        type: 'info',
      });
    }
  };

  return {ExpenditurePrint};
};

export const useContractIndividualExpensesPrint = () => {
  const {CurrentContractDetails, CurrentSupplierDetails} = useMyContext();

  const ContractIndividualExpensesPrint = async () => {
    const res = await getContractIndividualExpensesPrintApi({
      construction_supplies_id: CurrentSupplierDetails.current.id,
      sites_id: CurrentContractDetails.current.id,
    });

    if (res?.status == 200) {
      if (!res?.data?.data) {
        showMiniMessage({
          message: 'No File Found',
          type: 'info',
        });
        return;
      }
      await RNPrint.print({
        filePath: 'https://realestate.profcymabackend.com/' + res?.data?.data,
      });
    } else {
      showMiniMessage({
        message: 'Something Went Wrong Please Try Again',
        type: 'info',
      });
    }
  };

  return {ContractIndividualExpensesPrint};
};

export const useSupervisionSiteInfoPrint = () => {
  const {CurrentSupervisionDetails} = useMyContext();

  const SupervisionSiteInfoPrint = async () => {
    const res = await getSupervisionPrintApi({
      supervision_sites_id: CurrentSupervisionDetails.current.id,
    });

    if (res?.status == 200) {
      if (!res?.data?.data?.contact) {
        showMiniMessage({
          message: 'No File Found',
          type: 'info',
        });
        return;
      }
      await RNPrint.print({
        filePath:
          'https://realestate.profcymabackend.com/' + res?.data?.data?.contact,
      });
    } else {
      showMiniMessage({
        message: 'Something Went Wrong Please Try Again',
        type: 'info',
      });
    }
  };

  return {SupervisionSiteInfoPrint};
};

export const usePersonalUchalPrint = () => {
  const PrintItNow = async () => {
    const res = await getPersonalBookPrint();

    if (res?.status == 200) {
      if (!res?.data?.data) {
        showMiniMessage({
          message: 'No File Found',
          type: 'info',
        });
        return;
      }
      await RNPrint.print({
        filePath: 'https://realestate.profcymabackend.com/' + res?.data?.data,
      });
    } else {
      showMiniMessage({
        message: 'Something Went Wrong Please Try Again',
        type: 'info',
      });
    }
  };

  return {PrintItNow};
};

export const useUdharDiyePrint = () => {
  const PrintItNow = async () => {
    const res = await getPersonalBookPrint();

    if (res?.status == 200) {
      if (!res?.data?.data) {
        showMiniMessage({
          message: 'No File Found',
          type: 'info',
        });
        return;
      }
      const result = await RNPrint.print({
        filePath: 'https://realestate.profcymabackend.com/' + res?.data?.data,
      });
      // console.warn({result});
    } else {
      showMiniMessage({
        message: 'Something Went Wrong Please Try Again',
        type: 'info',
      });
    }
  };

  return {PrintItNow};
};

export const useDailyKharchaPrint = () => {
  const PrintItNow = async () => {
    const res = await getPersonalBookPrint();

    if (res?.status == 200) {
      if (!res?.data?.data) {
        showMiniMessage({
          message: 'No File Found',
          type: 'info',
        });
        return;
      }
      const result = await RNPrint.print({
        filePath: 'https://realestate.profcymabackend.com/' + res?.data?.data,
      });
      // console.warn({result});
    } else {
      showMiniMessage({
        message: 'Something Went Wrong Please Try Again',
        type: 'info',
      });
    }
  };

  return {PrintItNow};
};
