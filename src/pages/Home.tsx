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

const Home = () => {
  // VARIAVEIS
  const wallpaperImage: string = '../images/lofi_wallpaper.png';
  const iconImage: string = '../images/lofi_icon1.png';

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
        >
          {/* SCROLLVIEW PARA CONTROLAR A TELA QUANDO USUARIO USAR O TECLADO */}
          <ScrollView>
            <Image source={require(iconImage)} style={styles.icon} />

            <Text style={styles.loginText}>LOGIN</Text>

            {/* CAMPO DE EMAIL */}
            <TextInput
              style={styles.inputText}
              placeholder='Digite seu email'
              placeholderTextColor='white'
            />

            {/* CAMPO DE SENHA */}
            <TextInput
              style={styles.inputText}
              placeholder='Digite sua senha'
              placeholderTextColor='white'
            />

            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity style={styles.btn}>
              <Text>Login</Text>
            </TouchableOpacity>
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
    marginTop: 200,
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
  },
});

export default Home;
