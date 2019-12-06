import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    ImageBackground,
    Picker,
    TouchableOpacity,
    TextInput,
    RefreshControl,
    ScrollView,
    SafeAreaView,
    StyleSheet,

} from 'react-native';


import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import Fire from "../Fire";

import Icon from 'react-native-vector-icons/Ionicons';



export default class ReserveScreen extends Component {


    constructor(props) {

        super(props);

        this.state = {
            reserve: {
                category: "",
                starttime: "",
                endtime: "",
                floor: "",
                section: "",
                parkingslot: "",
                carplate: "",

            },
        };

        this.state = { PickerValueHolder: '' };
        this.state = {
            isVisible: false,
            chosenDate: ''
        }

        this.state = {

            // This is our Default number value
            NumberHolder: 1
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false,

        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    GenerateRandomNumber = () => {

        var RandomNumber = Math.floor(Math.random() * 100) + 1;

        this.setState({

            NumberHolder: RandomNumber

        })
    }

    handleSubmit = () => {
        Fire.shared.reserve(this.state.reserve);
        Alert.alert('Reserve successfully');
    };

    render() {

        const state = this.state;

        return (
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.contentContainer}
                    keyboardShouldPersistTaps='handled'
                >
                    <View style={styles.BackgroundSpacing}>

                        <View>
                            <Text style={styles.ReserveTitle}>Reserve</Text>
                        </View>

                        <View style={styles.dropdownlistContainer}>
                            <Picker
                                selectedValue={this.state.reserve.category}
                                onValueChange={category => this.setState({ reserve: { ...this.state.reserve, category } })}  
                                >

                                <Picker.Item label="Hybrid" value="Hybrid" />
                                <Picker.Item label="Normal" value="Normal" />
                                <Picker.Item label="Valet" value="Valet" />
                                <Picker.Item label="Disabilities" value="Disabilities" />
                                <Picker.Item label="Ladies" value="Ladies" />
                            </Picker>
                        </View>
                        <View>
                            <Text style={{ color: 'black', fontSize: 20, }}>
                                {this.state.chosenDate}
                            </Text>
                            <TouchableOpacity style={styles.DateButton} onPress={this.showPicker}>
                                <Text style={styles.textDate}>Reserve Date&Time</Text>
                            </TouchableOpacity>

                            <DateTimePicker
                                selectedValue={this.state.reserve.starttime}
                                onValueChange={starttime => this.setState({ reserve: { ...this.state.reserve, starttime } })}
                                isVisible={this.state.isVisible}
                                onConfirm={this.handlePicker}
                                onCancel={this.hidePicker}
                                mode={'datetime'}
                                is24Hour={true}
                            />
                        </View>

                        <View>
                            <Text style={{ color: 'black', fontSize: 20, }}>
                                {this.state.chosenDate}
                            </Text>
                            <TouchableOpacity style={styles.DateEndButton} onPress={this.showPicker}>
                                <Text style={styles.textDate}>End Date&Time</Text>
                            </TouchableOpacity>

                            <DateTimePicker
                                selectedValue={this.state.reserve.endtime}
                                onValueChange={endtime => this.setState({ reserve: { ...this.state.reserve, endtime } })}
                                isVisible={this.state.isVisible}
                                onConfirm={this.handlePicker}
                                onCancel={this.hidePicker}
                                mode={'datetime'}
                                is24Hour={true}
                            />
                        </View>

                        <View style={styles.TableContainer}>
                            <View>
                                <Text>Floor</Text>
                                <Text style={styles.textplateshow} onChange={this.state.NumberHolder}
                                    onChangeText={floor => this.setState({ reserve: { ...this.state.reserve, floor } })}
                                    value={this.state.reserve.floor}
                                />
                                <Text>Section</Text>
                                <Text style={styles.textplateshow} onChange={this.state.NumberHolder}
                                    onChangeText={section => this.setState({ reserve: { ...this.state.reserve, section } })}
                                    value={this.state.reserve.section}
                                />
                                <Text>Parking Slot</Text>
                                <Text style={styles.textplateshow} onChange={this.state.NumberHolder}
                                    onChangeText={parkingslot => this.setState({ reserve: { ...this.state.reserve, parkingslot } })}
                                    value={this.state.reserve.parkingslot}
                                />
                            </View>
                        </View>

                        <Text style={styles.textPlateNumber}>Car Plate Number</Text>
                        <TextInput style={styles.NumberPlateInput} onChange={this.handleChange}
                            onChangeText={carplate => this.setState({ reserve: { ...this.state.reserve, carplate } })}
                            value={this.state.reserve.carplate} />

                        <View style={styles.ButtonRefresh}>
                            <Button
                                onPress={this.GenerateRandomNumber}
                                title="Refresh"
                                color="#737373"
                            />
                        </View>
                        <View style={styles.ButtonReserve}>
                            <Button
                                onPress={this.handleSubmit}
                                title="Reserve"
                                color="cyan"
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    ReserveTitle: {
        textAlign: 'center',
        fontSize: 25,
    },

    BackgroundSpacing: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-between',
        padding: 10

    },

    dropdownlistContainer: {
        //flex: 1,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        margin: 10,
        padding: 10,

    },

    DateButton: {
        width: 250,
        height: 40,
        backgroundColor: '#330066',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: 1,

    },

    textDate: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },

    text: {
        margin: 6
    },

    TableContainer: {
        marginTop: 20,
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },

    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },

    wrapper: {
        flexDirection: 'row'
    },

    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },

    textPlateNumber: {
        marginTop: 20,
        marginBottom: 2,
        fontSize: 25,
        //textAlign: 'center'
    },

    NumberPlateInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white',
        borderColor: 'gray',
    },


    ButtonRefresh: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'

    },

    ButtonReserve: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'

    },

    row: {
        height: 28
    },

    text: {
        textAlign: 'center'
    },

    RefreshContainer: {
        flex: 1,
        marginTop: 10,

    },

    safeContainer: {
        flex: 1,
        backgroundColor: '#E8EAF6',
    },

    contentContainer: {
        padding: 8,
    },

    textplateshow: {
        marginBottom: 10,
        fontSize: 20
    },


});





ReserveScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'ios-person' : 'md-person'}
            color={tintColor}
            size={25}
        />
    )
}  