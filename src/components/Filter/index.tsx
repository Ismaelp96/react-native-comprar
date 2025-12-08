import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { CircleCheck, CircleDashed } from 'lucide-react-native';

import { styles } from './styles';

import { FilterStatus } from '@/@types/FilterStatus';

type FilterProps = TouchableOpacityProps & {
	status: FilterStatus;
	isActive: boolean;
};

export default function Filter({ status, isActive, ...rest }: FilterProps) {
	return (
		<TouchableOpacity
			style={[styles.container, { opacity: isActive ? 0.5 : 1 }]}
			activeOpacity={0.8}
			{...rest}>
			{FilterStatus.DONE ? (
				<CircleCheck size={18} color='#000' />
			) : (
				<CircleDashed size={18} color='#000' />
			)}
			<Text style={styles.title}>
				{status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
			</Text>
		</TouchableOpacity>
	);
}
