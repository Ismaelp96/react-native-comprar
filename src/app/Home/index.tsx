import {
	View,
	Image,
	TouchableOpacity,
	Text,
	FlatList,
	Alert,
} from 'react-native';
import { useState } from 'react';

import { styles } from './styles';
import { FilterStatus } from '@/@types/FilterStatus';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Filter from '@/components/Filter';
import Item from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
	{ id: '1', status: FilterStatus.DONE, description: '1 Pacote de café' },
	{
		id: '2',
		status: FilterStatus.PENDING,
		description: '1 Pacote de macarrão',
	},
	{ id: '3', status: FilterStatus.PENDING, description: '1 Pacote de chá' },
	{ id: '4', status: FilterStatus.DONE, description: '1 Pacote de miojo' },
	{ id: '5', status: FilterStatus.PENDING, description: '1 Pacote de sal' },
	{ id: '6', status: FilterStatus.DONE, description: '1 Pacote de arroz' },
];

export default function Home() {
	const [filter, setFilter] = useState(FilterStatus.PENDING);
	const [description, setDescription] = useState('');
	const [items, setItems] = useState<any>([]);

	function handleAdd() {
		if (!description.trim()) {
			return Alert.alert('Adicionar', 'Informe a descrição para adicionar.');
		}

		const newItem = {
			id: Math.random().toString(36).substring(2),
			description,
			status: FilterStatus.PENDING,
		};
		setItems((prevState: any) => [...prevState, newItem]);
	}

	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.logo} />
			<View style={styles.form}>
				<Input
					placeholder='O que você precisa comprar?'
					onChangeText={setDescription}
					value={description}
				/>
				<Button title='Adicionar' onPress={handleAdd} />
			</View>
			<View style={styles.content}>
				<View style={styles.header}>
					{FILTER_STATUS.map((status) => {
						return (
							<Filter
								key={`id-${status}`}
								status={status}
								isActive={status === filter}
								onPress={() => setFilter(status)}
							/>
						);
					})}
					<TouchableOpacity style={styles.clearButton}>
						<Text style={styles.clearText}>Limpar</Text>
					</TouchableOpacity>
				</View>
				<FlatList
					data={items}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Item
							data={item}
							onRemove={() => console.log('remover')}
							onStatus={() => console.log('Mudar status')}
						/>
					)}
					showsHorizontalScrollIndicator={false}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					contentContainerStyle={styles.listContent}
					ListEmptyComponent={() => (
						<Text style={styles.empty}>Lista está vázia.</Text>
					)}
				/>
			</View>
		</View>
	);
}
