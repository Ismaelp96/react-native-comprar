import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { FilterStatus } from '@/@types/FilterStatus';
import StatusIcon from '../StatusIcon';

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
			<StatusIcon status={status} />
			<Text style={styles.title}>
				{status === FilterStatus.DONE ? 'Comprados' : 'Pendentes'}
			</Text>
		</TouchableOpacity>
	);
}
