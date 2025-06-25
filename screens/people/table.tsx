import * as React from 'react';
import { Button, DataTable, FAB, Portal, TextInput } from 'react-native-paper';



const TablePeople = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     name: 'Junior Jimenez',
     phone: '859-787-3022',
     employee_id: "A3073318",
   },
   {
     key: 2,
     name: 'Mike Wells',
     phone: "545-5454-7878",
     employee_id: "a545646546",
   },
   {
     key: 3,
     name: 'Brian Franklin',
     phone: "455-545-5454",
     employee_id: "a445445",
   },
   {
     key: 4,
     name: 'Rylan Dockery',
     phone: "545-4545-4545",
     employee_id: "a484534534"
   },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // FAB Button
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <>
    <TextInput
      mode="outlined"
      label="Search"
      placeholder="Type something"
    />
    <DataTable>
      <DataTable.Header>
        <DataTable.Title
            sortDirection='descending'
        >Name</DataTable.Title>
        <DataTable.Title 
            sortDirection='descending'
            numeric
        >Phone</DataTable.Title>
        <DataTable.Title 
            sortDirection='descending'
            numeric
        >A#</DataTable.Title>
        <DataTable.Title 
            sortDirection='descending'
            numeric
        >Options</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.phone}</DataTable.Cell>
          <DataTable.Cell numeric>{item.employee_id}</DataTable.Cell>
          <DataTable.Cell
            style={{
                flexDirection: 'row-reverse'
            }}
          >
             <Button 
                icon="account-edit" 
                mode="contained-tonal" 
                onPress={() => console.log('Pressed')}
                contentStyle={{
                    flexDirection: 'row-reverse'
                }}
            >
                Edit
             </Button>
          </DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
    <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </>
  );
};

export default TablePeople;