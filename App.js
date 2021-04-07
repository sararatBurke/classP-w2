import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.page}>
        <View style={styles.nav}>
            <Text style={styles.navText}>Home</Text>
            <Text style={styles.navText}>About</Text>
            <Text style={styles.navText}>Portfolio</Text>
            <Text style={styles.navText}>Services</Text>
            <Text style={styles.navText}>Contact</Text>
        </View>
        <View>
            {/* <Image
            style={styles.img}
            source={{
            uri: 'https://www.html.am/templates/downloads/bryantsmith/hdmonochrome/mainImage.jpg'
            }}
            /> */}
            <View style={styles.img}>
              <Text>HD Monochrome</Text>
              <Text>An XHTML 1.0 Strict Template by Bryant Smith</Text>
            </View>
        </View>
        <View style={styles.content}>
            <Text style={styles.head}>High Definition Monochrome</Text>
              <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              
              <Text style={styles.quote}>This is a block quote, use it to include quotes from yourself or others. All you have to do to include this element is wrap some text around blockquote tags</Text>
            
            <Text style={styles.head}>Titles are H1 Tags</Text>
              <Text style={styles.bodyText}>Since the titles are H1 tags, try to include your keywords in them as search engines will look at them as being important content.</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
            
            <Text style={styles.head}>Yet Another One!</Text>
              <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
              <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
            
        </View>


        


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  page: {
    padding: 10,
    backgroundColor: '#590'
  },

  nav: {
    width: '80%',
    flexDirection: 'row',
    margin: 'auto'
  },
  navText:{
    fontFamily: 'Georgia',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 25,
    borderWidth: 1,
    borderBottomStyle: 'dotted',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    marginBottom: 7
  },
  img:{
    width: '80%',
    flexDirection: 'column',
    borderWidth: 10,
    marginBottom: 10,
    margin: 'auto'
  },

  content: {
    width: '80%',
    borderWidth: 10,
    padding: 15,
    margin: 'auto',
    backgroundColor: '#fff'
  },

  head: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 5 
  },

  bodyText: {
    fontFamily: 'Georgia',
    fontSize: 14,
    marginTop: 5, 
    marginBottom: 20, 
    lineHeight: 22,
  },

  quote:{
    width: '75%',
    fontFamily: 'Helvetica',
    lineHeight: 22,
    
    padding: 15,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 20,
    marginLeft: 10
  }
});
