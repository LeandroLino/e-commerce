module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING(255),
				allowNull: false,
			},
			birthDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			address: {
				type: Sequelize.JSON,
				allowNull: false,
			},
			phoneNumbers: {
				type: Sequelize.TEXT,
				allowNull: false,
				get() {
					const rawValue = this.getDataValue('phoneNumbers');
					return rawValue ? JSON.parse(rawValue) : [];
				},
				set(value) {
					this.setDataValue('phoneNumbers', JSON.stringify(value));
				},
			},
			cpf: {
				type: Sequelize.STRING(14),
				allowNull: false,
			},
			isAdmin: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			isDeleted: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
				allowNull: false,
			},
		},
		{
			tableName: 'users',
			timestamps: true,
		}
	);

	return User;
};
