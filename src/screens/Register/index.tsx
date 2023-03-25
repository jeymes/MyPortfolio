import React, { useEffect, useState } from 'react';
import { 
    KeyboardAvoidingView, 
    Platform, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    ActivityIndicator,
    } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { ArrowLeft } from 'react-native-feather';
import theme from '../../theme';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Photo } from '../../components/Photo';
import Video from 'react-native-video';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { ButtonUpdate } from '../../components/ButtonUpdate';

export type ProductProps ={
    // id: string;
    photo_url: string,
    video_url: string,
    name: string,
    description: string,
    skills: {
        skill01: {
            photo_skill: string,
            name_skill: string,
        },
        skill02: {
            photo_skill: string,
            name_skill: string,
        }
        skill03: {
            photo_skill: string,
            name_skill: string,
        }
    }
  }
  
  type Props = {
    data: ProductProps;
  }

export function Register({ data }: Props) {

    const navigation = useNavigation()

    const [imagePath, setImagePath] = useState('');
    const [videoPath, setVideoPath] = useState('');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [skill01, setSkill01] = useState('');
    const [skill02, setSkill02] = useState('');
    const [skill03, setSkill03] = useState('');

    const [nameSkill01, setNameSkill01] = useState('');
    const [nameSkill02, setNameSkill02] = useState('');
    const [nameSkill03, setNameSkill03] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const route = useRoute();
    // const { id } = route.params as ProductProps;

    function handleGoBack() {
        navigation.goBack()
    }

    const handlePickerImageLogo = () => {
        ImagePicker.openPicker
        ({ 
          width: 100, 
          height: 100, 
          cropping: true
        })
        .then(image => {
          setImagePath(image.path);
        });
    };

    const handlePickerImageSkill01 = () => {
        ImagePicker.openPicker
        ({ 
          width: 80, 
          height: 80, 
          cropping: true
        })
        .then(image => {
            setSkill01(image.path);
        });
    };

    const handlePickerImageSkill02 = () => {
        ImagePicker.openPicker
        ({ 
          width: 80, 
          height: 80, 
          cropping: true
        })
        .then(image => {
            setSkill02(image.path);
        });
    };

    const handlePickerImageSkill03 = () => {
        ImagePicker.openPicker
        ({ 
          width: 80, 
          height: 80, 
          cropping: true
        })
        .then(image => {
            setSkill03(image.path);
        });
    };

    const handlePickerVideo = () => {
        ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            setVideoPath(video.path);
          });
    };

    async function handleAdd(){
      if (!imagePath) {
        return Alert.alert("Cadastro", "Selecione uma logo.");
      }
      if (!videoPath) {
        return Alert.alert("Cadastro", "Selecione um video.");
      }
      if (!name.trim()) {
        return Alert.alert("Cadastro", "Informe o nome do projeto.");
      }
      if (!description.trim()) {
        return Alert.alert("Cadastro", "Informe a descrição do projeto.");
      }
      if (!skill01 || !skill02 || !skill03) {
        return Alert.alert("Cadastro", "Informe a logo de uma skill.");
      }
      if (!nameSkill01 || !nameSkill02 || !nameSkill03) {
        return Alert.alert("Cadastro", "Informe o nome da skill.");
      }

      setIsLoading(true);
      setIsDisabled(true);

      const fileName = new Date().getTime()

      const referencePhoto = storage().ref(`/img/${fileName}.png`);
      const referenceVideo = storage().ref(`/video/${fileName}.mp4`);

      await referencePhoto.putFile(imagePath);
      const photo_url = await referencePhoto.getDownloadURL();

      await referenceVideo.putFile(videoPath);
      const video_url = await referenceVideo.getDownloadURL();

      firestore()
      .collection('mobile')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        photo_url,
        photo_path: referencePhoto.fullPath,
        video_url,
        video_path: referenceVideo.fullPath,
        skills:{
            photo01: skill01,
            photo02: skill02,
            photo03: skill02,

            name01: nameSkill01,
            name02: nameSkill02,
            name03: nameSkill03,
        }
      })
      .then(() => navigation.navigate('home'))
      .catch(() =>{
      setIsLoading(false);
       Alert.alert("Cadastro", "Não foi possivel cadastrar a pizza.")})
    }


    // useEffect(() => {
    //     if (id) {
    //       firestore()
    //       .collection('pizzas')
    //       .doc(id)
    //       .get()
    //       .then(response => {
    //         const product = response.data() as ProductProps;
  
    //         setName(product.name);
    //         setImagePath(product.photo_url);
    //         setDescription(product.description);

    //       })
    //     }
    //   }, [id])
  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
      >
        <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ width: '90%'}}
      >
        <View style={styles.subContainer} >

            <View style={styles.header}>
                <TouchableOpacity
                onPress={handleGoBack} 
                style={styles.buttonBack} >
                    <ArrowLeft
                    width={25}
                    height={25}
                    color={theme.COLORS.SECONDARY}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Cadastrar
                </Text>
                <View
                style={{ width: 40, height: 40 }}
                />
            </View>

            <View style={styles.content} >

            <View style={styles.containerLogo}>

           <Photo
           title='Nenhuma foto carregada'
           uri={imagePath}
           />

            <ButtonUpdate
            onPress={handlePickerImageLogo}
            title="carregar"
            />

            </View>

            <View style={styles.containerVideo}>

            <View style={styles.video}>

                {
                videoPath !== '' ?
                <Video

                style={{ width: "100%", height: "100%", borderRadius: 10,}}
                source={{ uri: videoPath }}
                controls={true}
                />
                :
                <Text style={styles.titlevideo}>
                    Nenhum video carregado
                </Text>}

            </View>

            <ButtonUpdate
            onPress={handlePickerVideo}
            title="carregar"
            />

            </View>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                onChangeText={setName}
                style={styles.inputNome}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                onChangeText={setDescription}
                style={styles.inputDescription}
                />
            </View>

            <Text style={styles.titleTecnologias} >Tecnologias</Text>

            <View style={styles.containerTech} >

            <View style={styles.containerSkill}>

                <View style={styles.subContainerSkills}>

                    <Photo
                    width={80}
                    border={10}
                    fontSize={10}
                    title='Nenhuma skill carregada'
                    uri={skill01}
                    />

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
                onChangeText={setNameSkill01}
                style={styles.inputNomeSkill}
                />
            </View>
                </View>

            <ButtonUpdate
            onPress={handlePickerImageSkill01}
            title="carregar"
            />

            </View>
            <View style={styles.containerSkill}>

                <View style={styles.subContainerSkills}>
                <Photo
                    width={80}
                    border={10}
                    fontSize={10}
                    title='Nenhuma skill carregada'
                    uri={skill02}
                    />

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
                onChangeText={setNameSkill02}
                style={styles.inputNomeSkill}
                />
            </View>
                </View>
            
            <ButtonUpdate
            onPress={handlePickerImageSkill02}
            title="carregar"
            />

            </View>
            <View style={styles.containerSkill}>

             <View style={styles.subContainerSkills}>
                <Photo
                    width={80}
                    border={10}
                    fontSize={10}
                    title='Nenhuma skill carregada'
                    uri={skill03}
                    />

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
                onChangeText={setNameSkill03}
                style={styles.inputNomeSkill}
                />
            </View>
                </View>
            

            <ButtonUpdate
            onPress={handlePickerImageSkill03}
            title="carregar"
            />
            

            </View>
            </View>

            <View style={styles.buttonSalve}>
            <Button
            onPress={handleAdd}
            disabled={isDisabled}
            title={isLoading ? <ActivityIndicator color={theme.COLORS.PRIMARY} /> : 'Salvar Projeto'}
            />
 
            </View>

        </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}