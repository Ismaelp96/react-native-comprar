import { CircleDashed, CircleCheck } from 'lucide-react-native';

import { FilterStatus } from '@/@types/FilterStatus';
import { styles } from './styles';

export default function StatusIcon({ status }: { status: FilterStatus }) {
	return status === FilterStatus.DONE ? (
		<CircleCheck size={18} color='#2C46B1' />
	) : (
		<CircleDashed size={18} color='#000000' />
	);
}
