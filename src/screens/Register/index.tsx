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

export type ProjectsProps ={
    id: string;
    photo_url: string,
    video_url: string,
    name: string,
    description: string,
    skills: {

          photo01: string,
          name01: string,
          photo02: string,
          name02: string,
          photo03: string,
          name03: string,

    }
  }

export function Register() {

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

    const { id } = route.params as ProjectsProps;

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
      .collection('web')
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
            photo03: skill03,

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


    useEffect(() => {
      if (id) {
        const collections = ["mobile", "web"]; // Array com as coleções que deseja consultar
        const promises = collections.map((collection) => { // Cria uma referência para cada documento que deseja consultar
          return firestore()
            .collection(collection)
            .doc(id)
            .get()
            .then(response => response.data())
            .catch(() => null);
        });
    
        Promise.all(promises).then((results) => { // Combina os resultados em um único objeto
          const data = results.reduce((acc, cur) => {
            return { ...acc, ...cur };
          }, {});
          
          if (data !== null && data !== undefined) {
            setName(data.name);
            setImagePath(data.photo_url);
            setDescription(data.description);
            setVideoPath(data.video_url);
            setSkill01(data.skills.photo01);
            setSkill02(data.skills.photo02);
            setSkill03(data.skills.photo03);
            setNameSkill01(data.skills.name01);
            setNameSkill02(data.skills.name02);
            setNameSkill03(data.skills.name03);
          }
        }).catch(() => Alert.alert("Consulta", "Não foi possível realizar a consulta"));
      }
    }, [id]);
    
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
           title={imagePath !== id ? 'Nenhuma foto carregada' : <ActivityIndicator color={theme.COLORS.PRIMARY} />}
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
                source={ { uri: videoPath}}
                controls={true}
                />
                :
                <Text style={styles.titlevideo}>
                  {videoPath !== id ? "Nenhum video carregado" :  <ActivityIndicator color={theme.COLORS.PRIMARY} />}
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
                value={name}
                style={styles.inputNome}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                onChangeText={setDescription}
                value={description}
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
                    title={skill01 !== id ? 'Nenhuma skill carregada' : <ActivityIndicator color={theme.COLORS.PRIMARY} />}
                    uri={skill01}
                    />

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
                onChangeText={setNameSkill01}
                value={nameSkill01}
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
                    title={skill02 !== id ? 'Nenhuma skill carregada' : <ActivityIndicator color={theme.COLORS.PRIMARY} />}
                    uri={skill02}
                    />

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
                value={nameSkill02}
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
                    title={skill03 !== id ? 'Nenhuma skill carregada' : <ActivityIndicator color={theme.COLORS.PRIMARY} />}
                    uri={skill03}
                    />

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
                value={nameSkill03}
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
            width='100%'
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