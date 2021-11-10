module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', 
  {
      idUsuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
      },
      nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isAlpha: {
              msg: "O nome so pode conter letras"
            },
            len: {
              args: [2, 255],
              msg: "O nome deve ter um mínimo de 2 caracteres!"
            }
          }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "O e-mail deve ser um correio eletrônico válido!"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "O password deve ter um mínimo de 6 caracteres!"
          }
        }
      },
      tipoUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isAlphanumeric: {
            msg: "Tipo de usuário inválido"
          },
          len: {
            args: [1],
            msg: "Tipo de usuário inválido"
          }
        }
      }
  },
  {
      freezeTableName: true,
      timestamps: false,
  })
  return usuario
}