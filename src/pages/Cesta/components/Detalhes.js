import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto';

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
  return (
    <>
        <Texto style={styles.nome}>{ nome }</Texto>
        <View style={styles.containerFazendaInfo}>
          <Image source={ logoFazenda } style={styles.logoFazenda} />
          <Texto style={styles.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={styles.descricaoCesta}>{ descricao }</Texto>
        <Texto style={styles.preco}>{ preco }</Texto>
        <TouchableOpacity style={styles.botao} onPress={() => {}}>
          <Texto style={styles.botaoTexto}>{ botao }</Texto>
        </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({

    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    descricaoCesta: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    containerFazendaInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12
    },
    logoFazenda: {
        width: 32,
        height: 32,
        marginRight: 5
    },
    botao: {
      marginTop: 16,
      backgroundColor: '#2A9F85',
      paddingVertical: 16,
      borderRadius: 6,
    },
    botaoTexto: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 26
    },
})
