import { View, Text, FlatList } from 'react-native'
import React from 'react'

import ReviewCard from './ReviewCard';

export default function Reviews() {
    const data = [
        { rate:5, id: '131', title: 'Carrie', detail:'A very nice Restaurant for fine dinning.' },
        { rate:3, id: '851', title: 'Christian', detail:'A very nice Restaurant for fine dinning.' },
        { rate:5, id: '231', title: 'Lou', detail:'A very nice Restaurant for fine dinning.' },
        { rate:5, id: '11', title: 'Kathryn', detail:'A very nice Restaurant for fine dinning.' },
        { rate:5, id: '451', title: 'Hannah', detail:'A very nice Restaurant for fine dinning.' },
        { rate:1, id: '501', title: 'John', detail:'A very nice Restaurant for fine dinning.' },
        { rate:1, id: '91', title: 'Fred', detail:'A very nice Restaurant for fine dinning.' },
        { rate:1, id: '941', title: 'Juan', detail:'A very nice Restaurant for fine dinning.' },
        { rate:2, id: '871', title: 'Alan', detail:'A very nice Restaurant for fine dinning.' },
        { rate:1, id: '761', title: 'Iva', detail:'A very nice Restaurant for fine dinning.' },
        { rate:2, id: '81', title: 'Marion', detail:'A very nice Restaurant for fine dinning.' },
      ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={ReviewCard}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}