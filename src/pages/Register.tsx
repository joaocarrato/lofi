import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const Register = (props: any) => {
  // VARIAVEIS DE CONTROLE DE ESTADO
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  // VARIAVEIS
  const wallpaperImage: string = '../images/lofi_wallpaper2.png';
  const iconImage: string = '../images/lofi.png';

  // FUNÇÕES
  function navigateBack() {
    props.navigation.pop();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={30}
    >
      <View style={{ flex: 1 }}>
        {/* IMAGEM DE FUNDO */}
        <ImageBackground
          style={styles.imageWallpaper}
          source={require(wallpaperImage)}
          blurRadius={1.2}
        >
          {/* SCROLLVIEW PARA CONTROLAR A TELA QUANDO USUARIO USAR O TECLADO */}
          <ScrollView>
            <Image source={require(iconImage)} style={styles.icon} />

            <Text style={styles.loginText}>REGISTRAR</Text>

            {/* CAMPO DE EMAIL */}
            <TextInput
              value={email}
              onChangeText={(newEmail) => setEmail(newEmail)}
              style={styles.inputText}
              placeholder='Digite seu email'
              placeholderTextColor='white'
            />

            {/* CAMPO DE SENHA */}
            <TextInput
              value={pass}
              onChangeText={(newPass) => setPass(newPass)}
              style={styles.inputText}
              placeholder='Digite sua senha'
              placeholderTextColor='white'
            />

            {/* CAMPO DE CONFIRMAR SENHA */}
            <TextInput
              value={confirmPass}
              onChangeText={(newConfirmPass) => setConfirmPass(newConfirmPass)}
              style={styles.inputText}
              placeholder='Confirme sua senha'
              placeholderTextColor='white'
            />

            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
              <Text style={styles.btnText}>Registrar</Text>
            </TouchableOpacity>

            {/* TEXTO DANDO OPÇÃO PARA O USUARIO LOGAR */}

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                marginTop: 30,
              }}
            >
              <Text style={styles.text}>Já é membro? </Text>

              {/* TEXTO DE SE REGISTRAR */}
              <TouchableOpacity activeOpacity={0.6} onPress={navigateBack}>
                <Text style={[styles.text, styles.textTouchable]}>
                  Logue-se!
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  imageWallpaper: {
    flex: 1,
    resizeMode: 'cover',
  },
  icon: {
    height: 150,
    width: 150,
    borderRadius: 200,
    alignSelf: 'center',
    marginTop: 130,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
    letterSpacing: 1,
    alignSelf: 'center',
    marginBottom: 50,
  },
  inputText: {
    color: '#fff',
    backgroundColor: 'rgba(1, 1, 1, 0.4)',
    marginHorizontal: 20,
    height: 70,
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: 'rgba(1, 1, 1, 0.6)',
    height: 60,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  textTouchable: {
    fontSize: 19,
    color: '#0080ff',
    fontWeight: 'bold',
  },
});

export default Register;
