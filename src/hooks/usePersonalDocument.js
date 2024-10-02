import {useState} from 'react';
import {getPersonalDocumentApi} from '../network_storage_store/network_API/API';
import useCommonGetStates from './useCommonGetStates';

const usePersonalDocument = () => {
  const [SearchQuery, SetSearchQuery] = useState('');
  const getData = async () => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    try {
      const data = {
        documentType: 'personalDocument',
        name: SearchQuery,
      };
      await getPersonalDocumentApi(data).then(res => {
        // console.log(res.data.data);
        if (res?.data?.data?.length) {
          const List = res?.data?.data;
          setList(List);
        } else {
          setList([]);
        }
      });
    } catch (error) {
      console.error('Error fetching data at Personal Documents Screen:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const onRefresh = () => {
    getData(1);
  };

  const AllProps = useCommonGetStates(getData);
  const {List: MyList, setList, setIsLoading, setIsRefreshing} = AllProps;
  return {...AllProps, getData, onRefresh, SearchQuery, SetSearchQuery};
};

export default usePersonalDocument;
