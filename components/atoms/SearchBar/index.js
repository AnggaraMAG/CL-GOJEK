import * as React from 'react';
import {Searchbar} from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Cari layanan, makanan"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{borderRadius: 50, height: 45}}
    />
  );
};

export default MyComponent;
