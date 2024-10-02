import React, {useContext, useState, useEffect, useRef} from 'react';
import MyContext from './MyContext';
import {getAccessApi, getProfileApi} from '../network_API/API';
import {getToken, storeObject} from '../LocalDB/LocalDb';

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

const MyProvider = ({children}) => {
  const [GlobalProfileData, setGlobalProfileData] = useState({});
  const [Access, setAccess] = useState({});
  const CurrentContractDetails = useRef();
  const CurrentSupplierDetails = useRef();
  const CurrentDocumentHolderId = useRef();
  const CurrentDocumentHolderDetails = useRef();
  const CurrentPersonalDocumentDetails = useRef();
  const CurrentDevelopementSiteDetails = useRef();
  const CurrentUdharDiyeDetails = useRef();
  const CurrentAccountRecovery = useRef();
  const CurrentSupervisionDetails = React.useRef(null);
  const updateProfileData = async () => {
    updateAccessData();
    const token = await getToken();
    if (token) {
      const res = await getProfileApi();
      setGlobalProfileData(res?.data?.data);
      return res?.data?.data;
    }
    return false;
  };
  const updateAccessData = async () => {
    const token = await getToken();
    if (token) {
      const res = await getAccessApi();
      if (res.status == 200) {
        const objectData = res?.data?.data?.reduce((obj, item) => {
          obj[item.id] = item?.name;
          return obj;
        }, {});
        setAccess(objectData);
      }
    }
    return false;
  };

  const ResetGlobalProfileData = () => {
    setGlobalProfileData({});
  };

  useEffect(() => {
    updateProfileData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        // state,
        // updateState,
        updateProfileData,
        GlobalProfileData,
        CurrentContractDetails,
        CurrentSupplierDetails,
        CurrentSupervisionDetails,
        ResetGlobalProfileData,
        CurrentDocumentHolderId,
        CurrentDocumentHolderDetails,
        CurrentPersonalDocumentDetails,
        CurrentDevelopementSiteDetails,
        CurrentUdharDiyeDetails,
        CurrentAccountRecovery,
        updateAccessData,
        Access,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
