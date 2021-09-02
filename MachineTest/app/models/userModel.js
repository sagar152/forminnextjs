

!(function () {
    'use strict'
    let User = (sequelize, DataTypes) => {
        let User = sequelize.define('user', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING(100)
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            profilePic: {
                type: DataTypes.STRING(200),
                get() {
                    let profilePic = this.getDataValue('profilePic');
                    if (profilePic && fs.existsSync(path.join(global.__base, `/public/uploads/user/${profilePic}`))) {
                        return config.appConfig.apiUrl + `/uploads/user/${profilePic}`;
                    } else {
                        return "";
                    }
                },
            },
        })

        return User;
    };

    module.exports = User;
})();