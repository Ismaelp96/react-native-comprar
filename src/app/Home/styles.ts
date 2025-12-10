import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#d0d2d8',
		padding: 24,
		paddingTop: 62,
		gap: 24,
	},
	logo: {
		height: 34,
		width: 134,
	},
	form: { width: '100%', paddingHorizontal: 16, gap: 7, marginTop: 42 },
	content: {
		flex: 1,
		width: '100%',
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 24,
		padding: 24,
		paddingTop: 32,
		marginTop: 24,
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		gap: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#E4E6EC',
		paddingBottom: 12,
		marginTop: 32,
	},
	clearButton: { marginLeft: 'auto' },
	clearText: {
		fontSize: 12,
		color: '#828282',
		fontWeight: 600,
	},
});
