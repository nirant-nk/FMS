import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';
const useCommonGetStates = getData => {
  const isFocused = useIsFocused();
  const [List, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (getData) {
      getData();
    }
  }, [isFocused]);

  return {
    List,
    setList,
    isLoading,
    setIsLoading,
    isRefreshing,
    setIsRefreshing,
  };
};

export default useCommonGetStates;
