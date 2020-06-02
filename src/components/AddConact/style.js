const style = { 
    wrapper: {  
        magin: "0 auto",            
        width: "100%",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#91E1F1"        
    },

    spanHello: {
        marginTop: "1rem", 
        fontSize: "1.5rem"
    },
    spanGreeting: {
        fontSize: "1.1rem"
    },

    formWrapper:{
        width: "40%",
        display: "flex",
        flexDirection: "column",
        margin: "1rem", 
        padding: "20px 40px",
        borderRadius: "15px",
        boxShadow: "0px 10px 50px #555",
        backgroundColor: "#ffffff"
    },

    form: {     
        width: "100%",
        display: "flex",
        _flexDirection: "column",
        flexWrap: "wrap"

    },
    inputGroup: {
        width: "100%",        
        marginBottom: 10,  
        backgroundColor: "#EFEFFF",      
        padding: "10px 10px",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid #cfcfcf"        
    },
    input: {      
        backgroundColor: "##cfcfcf",
        width: "90%",
        marginLeft: "10",
        marginRight: "10",
        marginBottom: 10,
        padding: "10px 10px",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid #cfcfcf",
        aaa : {
            color: "green"
        }   
    },
    error: {
        color: "red",
        margin: 5
    },




 h1: {
    textAlign: "center",
    width: "100%",
    color: "#111",
    fontWeight: "lighter",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
 },



 img: {
    borderRadius: "20px",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginBottom: "5%", 
    width:"95%"
 } ,
imgBottom: {
    borderRadius: "25px",
    marginLeft: "25%",
    marginRight: "25%",    
    marginTop: "2.5%", 
    marginBottom: "1.25%", 
    width:"50%"
},

 buttonSave: {   
    minWidth: "25%",
    marginRight: "10%", 
    marginLeft: "15%"
 },
 buttonDelete: {   
    minWidth: "25%",
    marginRight: "15%", 
    marginLeft: "10%"
 },

 divList: {
    marginTop: "5%",
    marginBottom: "2%"    
 },
 buttonList: { 
    marginLeft: "25%", 
    marginRight: "25%",  
    minWidth: "50%" 
 },
 button: {    
      marginTop: "1%",
      marginBottom: "5%",      
      minHeight: "45%",
      border: "1px solid black",
      borderRadius: "5px",   
      padding: "5px"   
 }



};

export default style;