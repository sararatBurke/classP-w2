import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function App() {

  const banner = { uri: "https://www.html.am/templates/downloads/bryantsmith/hdmonochrome/mainImage.jpg" };
  const bg = { uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBxASBgYGBg0PBgYGDRAICRANFBEWFhQRExMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANMA7wMBIgACEQEDEQH/xAAZAAEBAQADAAAAAAAAAAAAAAAABAIDBQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAExL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9u2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7Ngo2bT7NgloUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAroUSUKAjqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKgtqVRVKghqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1KguqVQ1Kg6+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqC+pVBUqCCpVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsC+pVBYsCGpVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqC6pVDUqCKhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCuhRJQoCShRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2CmhRNs2Dg0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAa0aZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="};
  //const bg = { uri: "data:image/jpeg;base64,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" };
  
  return (
    <View style={styles.container}>
      <View style={styles.page}>
      <ImageBackground source={bg} style={styles.containerBg}>
          <View style={styles.nav}>
              <Text style={styles.navText}>Home</Text>
              <Text style={styles.navText}>About</Text>
              <Text style={styles.navText}>Portfolio</Text>
              <Text style={styles.navText}>Services</Text>
              <Text style={styles.navText}>Contact</Text>
          </View>
          <View style={styles.img}>
              <ImageBackground source={banner} style={styles.image}>
                <View style={styles.banner}>
                  <Text style={styles.bannerHead}>HD Monochrome</Text>
                  <Text style={styles.bannerSubHead}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
                </View>
              </ImageBackground> 
              
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
      </ImageBackground>
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
  containerBg: {
    width: '100%',
    flex: 1,
    resizeMode: "stretch",
    padding: 20
  },
  page: {
    backgroundColor: '#ccc',
    
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
    borderWidth: 10,
    marginBottom: 10,
    margin: 'auto'
  },
  image: {
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center",
    padding: 20,
    
  },
  banner: {
    height: 300
  },
  bannerHead:{
    fontFamily: 'Georgia',
    fontSize: 25,
  },
  bannerSubHead:{
    fontFamily: 'Georgia',
    fontSize: 15,
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
