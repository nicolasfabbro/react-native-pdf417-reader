import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

export default class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Detalles',
    };

    capitalize(str) {
        const lower = str.toLowerCase();
        const capit = lower.replace(/\b\w/g, l => l.toUpperCase());
        return capit;
    }

    render() {
        const { navigation } = this.props;
        const userData = navigation.getParam('userData', null);
        
        return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <UserAvatar size="80" style={styles.avatar} name={userData.firstname + ' ' + userData.lastname} color="#999" />
                <Text style={styles.userName}>{ this.capitalize(userData.firstname) } { this.capitalize(userData.lastname) }</Text>
            </View>
            <SectionList
            sections={[
                {title: 'Tramite Nº', data: [userData.procedure]},
                {title: 'Sexo', data: [userData.gender]},
                {title: 'DNI', data: [userData.id]},
                {title: 'Ejemplar', data: [userData.copy]},
                {title: 'Fecha de Nacimiento', data: [userData.birthdate]},
                {title: 'Fecha de Emisión', data: [userData.creation_date]},
                {title: 'Número X', data: [userData.x_number]},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
            />
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTop: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        marginBottom: 20
    },
    userName: {
        fontSize: 24,
    },
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 16,
        height: 44,
        backgroundColor: '#fff'
    },
  })