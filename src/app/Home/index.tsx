import { View, Image, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { FilterStatus } from '@/@types/FilterStatus';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Filter from '@/components/Filter';
import Item from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function Home() {
	return (
		<View style={styles.container}>
			<Image source={require('@/assets/logo.png')} style={styles.logo} />
			<View style={styles.form}>
				<Input placeholder='O que você precisa comprar?' />
				<Button title='Entrar' />
			</View>
			<View style={styles.content}>
				<View style={styles.header}>
					{FILTER_STATUS.map((status) => {
						return <Filter key={`id-${status}`} status={status} isActive />;
					})}
					<TouchableOpacity style={styles.clearButton}>
						<Text style={styles.clearText}>Limpar</Text>
					</TouchableOpacity>
				</View>
				<Item
					data={{ status: FilterStatus.DONE, description: 'Café' }}
					onRemove={() => console.log('remover')}
					onStatus={() => console.log('Mudar status')}
				/>
			</View>
		</View>
	);
}
