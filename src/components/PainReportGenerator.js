import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

const PainReportGenerator = () => {
  const [date, setDate] = useState('');
  const [intensity, setIntensity] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');

  const generatePDF = async () => {
    const htmlContent = `
      <h1>통증 보고서</h1>
      <p><strong>날짜:</strong> ${date}</p>
      <p><strong>통증 강도:</strong> ${intensity}</p>
      <p><strong>통증 부위:</strong> ${area}</p>
      <p><strong>설명:</strong> ${description}</p>
    `;

    try {
      const options = {
        html: htmlContent,
        fileName: 'PainReport',
        directory: 'Documents',
      };

      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('보고서 생성 완료', 'PDF 보고서가 생성되었습니다.');
      sharePDF(file.filePath);
    } catch (error) {
      Alert.alert('보고서 생성 실패', 'PDF 생성 중 오류가 발생했습니다.');
    }
  };

  const sharePDF = async (filePath) => {
    const options = {
      url: `file://${filePath}`,
      type: 'application/pdf',
      message: '통증 보고서를 공유합니다.',
    };
    await Share.open(options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>통증 보고서 작성</Text>
      <TextInput
        style={styles.input}
        placeholder="날짜 (예: 2024-10-01)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="통증 강도 (예: Mild, Severe)"
        value={intensity}
        onChangeText={setIntensity}
      />
      <TextInput
        style={styles.input}
        placeholder="통증 부위 (예: 어깨, 허리)"
        value={area}
        onChangeText={setArea}
      />
      <TextInput
        style={styles.input}
        placeholder="설명"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="보고서 생성하기" onPress={generatePDF} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default PainReportGenerator;
