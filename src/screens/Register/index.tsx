import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { ArrowLeft } from 'react-native-feather';
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { Photo } from '../../components/Photo';
import Video from 'react-native-video';

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



    function handleGoBack() {
        navigation.goBack()
    }

    const handlePickerImage = () => {
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

    const handlePickerVideo = () => {
        ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            setVideoPath(video.path);
          });
    };

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

            <TouchableOpacity
            onPress={handlePickerImage}
            style={styles.buttonUpgrad}>

            <Text style={styles.titleButton}>carregar</Text>
            </TouchableOpacity>

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

            <TouchableOpacity 
            onPress={handlePickerVideo}
            style={styles.buttonUpgrad}>
                <Text style={styles.titleButton}>carregar</Text>
            </TouchableOpacity>
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
            

            <TouchableOpacity style={styles.buttonUpgradSkill}>
            <Text style={styles.titleButtonSkill}>carregar</Text>
            </TouchableOpacity>

            </View>
            <View style={styles.containerSkill}>

                <View style={styles.subContainerSkills}>
                <Photo
                    width={80}
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
            

            <TouchableOpacity style={styles.buttonUpgradSkill}>
            <Text style={styles.titleButtonSkill}>carregar</Text>
            </TouchableOpacity>

            </View>
            <View style={styles.containerSkill}>

             <View style={styles.subContainerSkills}>
                <Photo
                    width={80}
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
            

            <TouchableOpacity style={styles.buttonUpgradSkill}>
            <Text style={styles.titleButtonSkill}>carregar</Text>
            </TouchableOpacity>

            </View>
            </View>

            <View style={styles.buttonSalve}>
            <Button
            title='Salvar Projeto'
            />
 
            </View>

        </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}