import React from 'react';
import { KeyboardAvoidingView, Platform, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';

export function Register() {
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
                <Text style={styles.title}>
                    Cadastrar
                </Text>
            </View>

            <View style={styles.content} >

            <View style={styles.containerLogo}>

            <View style={styles.logo}>
                <Text style={styles.titleLogo}>
                    Nenhum logo carregado
                </Text>
            </View>

            <TouchableOpacity style={styles.buttonUpgrad}>
            <Text style={styles.titleButton}>carregar</Text>
            </TouchableOpacity>

            </View>

            <View style={styles.containerVideo}>

            <View style={styles.video}>
                <Text style={styles.titlevideo}>
                    Nenhum video carregado
                </Text>
            </View>

            <TouchableOpacity style={styles.buttonUpgrad}>
                <Text style={styles.titleButton}>carregar</Text>
            </TouchableOpacity>
            </View>
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                style={styles.inputNome}
                />
            </View>

            <View style={styles.containerInput}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput
                style={styles.inputDescription}
                />
            </View>

            <Text style={styles.titleTecnologias} >Tecnologias</Text>

            <View style={styles.containerTech} >

            <View style={styles.containerSkill}>

                <View style={styles.subContainerSkills}>
                <View style={styles.skill}>
                <Text style={styles.titleSkill}>
                    Nenhuma skill carregada
                </Text>
            </View>

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
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
                <View style={styles.skill}>
                <Text style={styles.titleSkill}>
                    Nenhuma skill carregada
                </Text>
            </View>

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
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
                <View style={styles.skill}>
                <Text style={styles.titleSkill}>
                    Nenhuma skill carregada
                </Text>
            </View>

            <View style={styles.containerInputSkill}>
                <Text style={styles.labelSkill}>Nome</Text>
                <TextInput
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