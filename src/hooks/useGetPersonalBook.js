import {getToken} from '../network_storage_store/LocalDB/LocalDb';
import {getPersonalBookApi} from '../network_storage_store/network_API/API';
import {db} from './PersonalBook/useAddKharcha';
import useCommonGetStates from './useCommonGetStates';

const useGetPersonalBook = ({type}) => {
  const getData = async () => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    try {
      const mobileNumber = await getToken();
      db.transaction(txn => {
        txn.executeSql(
          'SELECT * FROM finance WHERE type = ? AND mobile_number = ?',
          [type, mobileNumber],
          (tx, results) => {
            const rows = results.rows;
            let entries = [];

            for (let i = 0; i < rows.length; i++) {
              entries.push({
                id: rows.item(i).id,
                name: rows.item(i).name,
                amount: rows.item(i).amount,
                interest: rows.item(i).interest, // May be null
                frequency: rows.item(i).frequency, // May be null
                type: rows.item(i).type, // Matched type
                mobileNumber: rows.item(i).mobile_number, // Matched mobile number
                incomeType: rows.item(i).income_type, // Optional field
              });
            }
            setList(entries);
          },
          error => {
            console.log('Error retrieving filtered entries: ', error);
          },
        );
      });
    } catch (error) {
      console.error('Error fetching data at Comments Screen:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const onRefresh = () => {
    getData();
  };

  const AllProps = useCommonGetStates(getData);
  const {List: MyList, setList, setIsLoading, setIsRefreshing} = AllProps;
  return {...AllProps, getData, onRefresh};
};

export default useGetPersonalBook;
