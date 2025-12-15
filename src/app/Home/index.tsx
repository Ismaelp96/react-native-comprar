import {
	View,
	Image,
	TouchableOpacity,
	Text,
	FlatList,
	Alert,
} from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from './styles';
import { FilterStatus } from '@/@types/FilterStatus';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Filter from '@/components/Filter';
import Item from '@/components/Item';
import { ItemStorage, itemsStorage } from '@/storage/itemsStorage';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function Home() {
	const [filter, setFilter] = useState(FilterStatus.PENDING);
	const [description, setDescription] = useState('');
	const [items, setItems] = useState<ItemStorage[]>([]);

	async function handleAdd() {
		if (!description.trim()) {
			return Alert.alert('Adicionar', 'Informe a descrição para adicionar.');
		}
		const newItem = {
			id: Math.random().toString(36).substring(2),
			description,
			status: FilterStatus.PENDING,
		};

		await itemsStorage.add(newItem);
		await ItemsByStatus();

		Alert.alert('Adicionado', `Adicionado ${description}`);
		setFilter(FilterStatus.PENDING);
		setDescription('');
	}

	async function ItemsByStatus() {
		try {
			const response = await itemsStorage.getByStatus(filter);
			setItems(response);
		} catch (error) {
			console.error(error);
			Alert.alert('Erro', 'Não foi possível filtrar os itens.');
		}
	}

	useEffect(() => {
		ItemsByStatus();
	}, [filter]);

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
