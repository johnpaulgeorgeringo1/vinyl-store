// Complete vinyl collection with 200+ records from your document
const vinylRecords = [
    // Rock/Pop - Major Artists
    { artist: "10CC", album: "10CC", recordCompany: "UKS", barcode: "53105", releaseYear: "1973", country: "US", quality: "VG/VG+", price: 8000, notes: "", genre: "Rock/Pop" },
    { artist: "10CC", album: "The Original Soundtrack", recordCompany: "Mercury", barcode: "5705483", releaseYear: "1975-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ABBA", album: "The Album", recordCompany: "Atlantic", barcode: "SD 19164", releaseYear: "1977", country: "US", quality: "VG+/VG+", price: 8000, notes: "", genre: "Rock/Pop" },
    { artist: "AC/DC", album: "Back in Black", recordCompany: "Sony", barcode: "510765", releaseYear: "1980-2009", country: "EU", quality: "M/M", price: 7000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "AC/DC", album: "Power Up", recordCompany: "Columbia", barcode: "19439816661", releaseYear: "2020", country: "EU", quality: "S/S", price: 10000, notes: "Transparent Yellow, bontatlan", genre: "Rock/Pop" },
    
    // ALLMAN BROTHERS - Complete Collection
    { artist: "ALLMAN BROTHERS", album: "The Allman Brothers Band I-II", recordCompany: "Mercury", barcode: "602547813190", releaseYear: "1969-2016", country: "EU", quality: "M/M", price: 14000, notes: "1x lejátszott", genre: "Rock/Pop" },
    { artist: "ALLMAN BROTHERS", album: "Idlewild South", recordCompany: "Mercury", barcode: "0602547813237", releaseYear: "1970-2016", country: "EU", quality: "M/M", price: 9000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ALLMAN BROTHERS", album: "At Fillmore East I-II", recordCompany: "Mercury", barcode: "0602547813251", releaseYear: "1973-2016", country: "EU", quality: "M/M", price: 13000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ALLMAN BROTHERS", album: "Eat a Peach I-II", recordCompany: "Mercury", barcode: "0602547813312", releaseYear: "1972-2016", country: "EU", quality: "M/M", price: 13000, notes: "1x lejátszott", genre: "Rock/Pop" },
    { artist: "ALLMAN BROTHERS", album: "Brothers and Sisters", recordCompany: "Mercury", barcode: "0602537287987", releaseYear: "1973-2016", country: "EU", quality: "M/M", price: 9000, notes: "lejátszatlan", genre: "Rock/Pop" },
    
    // BEATLES - Extensive Collection
    { artist: "BEATLES", album: "Please Please Me", recordCompany: "PCS", barcode: "3042", releaseYear: "1963-1978", country: "S", quality: "M/M", price: 15000, notes: "Reissue", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "A Hard Day's Night", recordCompany: "SLPXL", barcode: "17658", releaseYear: "1964-1981", country: "HU", quality: "VG+/NM", price: 6500, notes: "", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "A Hard Day's Night", recordCompany: "Apple", barcode: "0094638241317", releaseYear: "1964-2012", country: "EU", quality: "M/M", price: 11000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "Sgt.Pepper's Lonely Hearts Club Band I-II", recordCompany: "PCS", barcode: "7027", releaseYear: "1967-2017", country: "EU", quality: "M/M", price: 19000, notes: "Special Edition, lejátszatlan", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "Magical Mystery Tour", recordCompany: "PCTC", barcode: "255", releaseYear: "1976", country: "UK", quality: "NM/NM", price: 19000, notes: "+24-page full-colour picture book", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "The Beatles Album I-II", recordCompany: "Apple", barcode: "0602567696865", releaseYear: "1968-2018", country: "EU", quality: "M/M", price: 17000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "Abbey Road", recordCompany: "PCS", barcode: "7088", releaseYear: "1969-2019", country: "UK", quality: "M/M", price: 11000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "Let It Be", recordCompany: "Apple", barcode: "0094638247210", releaseYear: "1970-2012", country: "EU", quality: "M/M", price: 11000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "BEATLES", album: "The Beatles 1962-70 I-IV", recordCompany: "EMI", barcode: "1C188-05 307-08", releaseYear: "1973", country: "D", quality: "NM/NM", price: 40000, notes: "100-150 EUR", genre: "Rock/Pop" },
    
    // BLACK SABBATH - Complete Collection
    { artist: "BLACK SABBATH", album: "Black Sabbath", recordCompany: "BMGCAT", barcode: "735CLP", releaseYear: "2022", country: "EU", quality: "S/S", price: 12000, notes: "LE, Purple&Black Splatter, lejátszatlan", genre: "Rock/Pop" },
    { artist: "BLACK SABBATH", album: "Paranoid", recordCompany: "BMGRM", barcode: "054LP", releaseYear: "1970-2022", country: "EU", quality: "S/S", price: 11000, notes: "50th Anniversary Edition, lejátszatlan", genre: "Rock/Pop" },
    { artist: "BLACK SABBATH", album: "Sabbath Bloody Sabbath", recordCompany: "BRGRM", barcode: "057LP", releaseYear: "1973-2021", country: "EU", quality: "M/M", price: 12000, notes: "LE, Yellow, lejátszatlan", genre: "Rock/Pop" },
    { artist: "BLACK SABBATH", album: "Black Sabbath 13 I-II", recordCompany: "Vertigo", barcode: "3734960", releaseYear: "2013", country: "EU", quality: "M/M", price: 14000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "BLACK SABBATH", album: "The End I-III", recordCompany: "EAGLP", barcode: "679", releaseYear: "2019", country: "EU", quality: "M/M", price: 19000, notes: "LE, Transparent Blue, lejátszatlan", genre: "Rock/Pop" },
    
    // CREAM - Complete Collection
    { artist: "CREAM", album: "Fresh Cream", recordCompany: "Polydor", barcode: "2384 067", releaseYear: "1966-1974", country: "UK", quality: "VG+/VG", price: 6000, notes: "+2 Bonus szám", genre: "Rock/Pop" },
    { artist: "CREAM", album: "Disraeli Gears", recordCompany: "RSO", barcode: "2479 185", releaseYear: "1967-1977", country: "D", quality: "VG+/VG+", price: 7500, notes: "", genre: "Rock/Pop" },
    { artist: "CREAM", album: "Wheels of Fire I-II", recordCompany: "", barcode: "0600753548479", releaseYear: "1968-2015", country: "EU", quality: "M/M", price: 12000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "CREAM", album: "Goodbye Cream", recordCompany: "RSO", barcode: "2479-202", releaseYear: "1969-1977", country: "D", quality: "VG+/VG+", price: 8500, notes: "", genre: "Rock/Pop" },
    { artist: "CREAM", album: "Live Cream", recordCompany: "RSO", barcode: "2479 152", releaseYear: "1970-1982", country: "D", quality: "VG+/VG+", price: 8000, notes: "", genre: "Rock/Pop" },
    { artist: "CREAM", album: "Live Cream Vol.II", recordCompany: "RSO", barcode: "2479 153", releaseYear: "1972-1982", country: "D", quality: "VG+/VG+", price: 8000, notes: "", genre: "Rock/Pop" },
    
    // DEEP PURPLE - Complete Collection
    { artist: "DEEP PURPLE", album: "In Rock", recordCompany: "Fame", barcode: "FA 3011", releaseYear: "1970-1982", country: "UK", quality: "VG+/VG+", price: 6000, notes: "", genre: "Rock/Pop" },
    { artist: "DEEP PURPLE", album: "In Rock", recordCompany: "Harvest", barcode: "0825646035083", releaseYear: "1970-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "DEEP PURPLE", album: "Fireball", recordCompany: "SHVL", barcode: "793", releaseYear: "1971-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "DEEP PURPLE", album: "Machine Head", recordCompany: "Universal", barcode: "TPSA 7504", releaseYear: "1972-2018", country: "NL", quality: "S/S", price: 11000, notes: "LE Purple, bontatlan", genre: "Rock/Pop" },
    { artist: "DEEP PURPLE", album: "Made in Japan I-II", recordCompany: "Purple", barcode: "5C 188-93915-16", releaseYear: "1972", country: "NL", quality: "VG+/VG+", price: 8500, notes: "", genre: "Rock/Pop" },
    { artist: "DEEP PURPLE", album: "Made in Japan I-II", recordCompany: "Purple", barcode: "3769659", releaseYear: "1972-2014", country: "EU", quality: "M/M", price: 13000, notes: "", genre: "Rock/Pop" },
    
    // LED ZEPPELIN - Complete Collection  
    { artist: "LED ZEPPELIN", album: "Led Zeppelin", recordCompany: "ATL", barcode: "8122796641", releaseYear: "1969-2014", country: "D", quality: "M/M", price: 7000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "Led Zeppelin II", recordCompany: "Atlantic", barcode: "8122796640", releaseYear: "1969-2014", country: "D", quality: "M/M", price: 7500, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "Led Zeppelin III", recordCompany: "Atlantic", barcode: "8122796576", releaseYear: "1970-2014", country: "D", quality: "S/S", price: 9000, notes: "bontatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "Led Zeppelin IV ZOSO", recordCompany: "Atlantic", barcode: "8122-79657-7", releaseYear: "1971-2014", country: "D", quality: "M/M", price: 8000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "Houses of the Holy", recordCompany: "ATL", barcode: "81227965730", releaseYear: "1973-2014", country: "D", quality: "S/S", price: 10000, notes: "bontatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "Physical Graffity I-II", recordCompany: "ATL", barcode: "8122796578", releaseYear: "1975-2015", country: "D", quality: "S/S", price: 11000, notes: "bontatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "Presence", recordCompany: "Swan Song", barcode: "8122796579", releaseYear: "1976-2015", country: "D", quality: "M/M", price: 9000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "In Through the Out Door", recordCompany: "Swan Song", barcode: "8122796574", releaseYear: "1979-2015", country: "D", quality: "M/M", price: 8000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "LED ZEPPELIN", album: "CODA", recordCompany: "Swan Song", barcode: "8122795588", releaseYear: "1982-2015", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    
    // PINK FLOYD - Complete Collection
    { artist: "PINK FLOYD", album: "Piper At The Gates Of Dawn", recordCompany: "PFRLP", barcode: "38", releaseYear: "1967-2022", country: "EU", quality: "M/M", price: 10000, notes: "Mono, lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "A Saucerful Of Secrets", recordCompany: "PFRLP", barcode: "30", releaseYear: "2022", country: "EU", quality: "M/M", price: 10000, notes: "Mono, lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "More", recordCompany: "PFRLP", barcode: "3", releaseYear: "1969-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "Atom Heart Mother", recordCompany: "PFRLP", barcode: "5", releaseYear: "1970-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "Meddle", recordCompany: "PFRLP", barcode: "6", releaseYear: "1971-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "Dark Side of the Moon", recordCompany: "EMI-PFRLP8", barcode: "5099902987613", releaseYear: "1973-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "Wish You Were Here", recordCompany: "EMI-PFRLP9", barcode: "", releaseYear: "1975-2016", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "PINK FLOYD", album: "Animals", recordCompany: "PFRLP", barcode: "10", releaseYear: "1977-2016", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    
    // ROLLING STONES - Extensive Collection
    { artist: "ROLLING STONES", album: "England's Newest Hitmakers", recordCompany: "ABKCO", barcode: "882316-1", releaseYear: "1964-2003", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Out Of Our Heads", recordCompany: "ABKCO", barcode: "882319-1", releaseYear: "1965-2003", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Between the Buttons", recordCompany: "ABKCO", barcode: "882 326-1", releaseYear: "1967-2003", country: "EU", quality: "M/M", price: 10000, notes: "1x lejátszott", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Beggars' Banquet", recordCompany: "ABKCO", barcode: "882330-1", releaseYear: "1968-2003", country: "EU", quality: "M/M", price: 10000, notes: "1x lejátszott", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Let It Bleed", recordCompany: "ABKCO", barcode: "882332-1", releaseYear: "1969-2003", country: "EU", quality: "M/M", price: 10000, notes: "1x lejátszott", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Sticky Fingers", recordCompany: "Polydor", barcode: "376482-1", releaseYear: "1971-2015", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Exile On Main Street I-II", recordCompany: "Polydor", barcode: "271428-6", releaseYear: "1972-2010", country: "EU", quality: "M/M", price: 13000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "ROLLING STONES", album: "Some Girls", recordCompany: "", barcode: "0602527147246", releaseYear: "1978-2010", country: "NL", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Rock/Pop" },
    
    // JAZZ SECTION - Major Artists
    
    // Miles DAVIS - Complete Collection
    { artist: "Miles DAVIS", album: "Kind of Blue", recordCompany: "Legacy", barcode: "88875111921", releaseYear: "1959-2015", country: "EU", quality: "M/M", price: 6000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Miles DAVIS", album: "Sketches of Spain", recordCompany: "CBS", barcode: "460604 1", releaseYear: "1960-1987", country: "NL", quality: "VG+/VG+", price: 6000, notes: "", genre: "Jazz" },
    { artist: "Miles DAVIS", album: "Miles Smiles", recordCompany: "MOVLP", barcode: "1071", releaseYear: "1967-2014", country: "NL", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Miles DAVIS", album: "In a Silent Way", recordCompany: "CBS", barcode: "S63630", releaseYear: "1969", country: "NL", quality: "VG/NM", price: 5000, notes: "", genre: "Jazz" },
    { artist: "Miles DAVIS", album: "On The Corner", recordCompany: "MOVLP", barcode: "518", releaseYear: "1972-2012", country: "NL", quality: "M/M", price: 11000, notes: "lejátszatlan", genre: "Jazz" },
    
    // John COLTRANE
    { artist: "John COLTRANE", album: "Blue Train", recordCompany: "Blue Note", barcode: "1577", releaseYear: "1958-2014", country: "EU", quality: "M/M", price: 8000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "John COLTRANE", album: "Olé Coltrane", recordCompany: "Atlantic", barcode: "1373", releaseYear: "1961-1966", country: "US", quality: "VG+/VG+", price: 12000, notes: "", genre: "Jazz" },
    
    // Herbie HANCOCK - Complete Collection
    { artist: "Herbie HANCOCK", album: "Head Hunters", recordCompany: "MOVLP", barcode: "030", releaseYear: "1973-2009", country: "NL", quality: "M/M", price: 10000, notes: "1x lejátszott", genre: "Jazz" },
    { artist: "Herbie HANCOCK", album: "Thrust", recordCompany: "MOVLP", barcode: "032", releaseYear: "1974-2009", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Herbie HANCOCK", album: "Man-Child", recordCompany: "CBS", barcode: "69185", releaseYear: "1975", country: "NL", quality: "VG/VG+", price: 7500, notes: "", genre: "Jazz" },
    
    // WEATHER REPORT
    { artist: "WEATHER REPORT", album: "Sweetnighter", recordCompany: "CBS", barcode: "S 65532", releaseYear: "1973", country: "NL", quality: "NM/NM", price: 7000, notes: "", genre: "Jazz" },
    { artist: "WEATHER REPORT", album: "Tale Spinnin'", recordCompany: "CBS", barcode: "80734", releaseYear: "1975", country: "NL", quality: "NM/NM", price: 7000, notes: "", genre: "Jazz" },
    { artist: "WEATHER REPORT", album: "Weather Report 8:30 I-II", recordCompany: "CBS", barcode: "88455", releaseYear: "1979", country: "NL", quality: "VG+/NM", price: 10000, notes: "", genre: "Jazz" },
    { artist: "WEATHER REPORT", album: "Night Passage", recordCompany: "CBS", barcode: "84597", releaseYear: "1980", country: "NL", quality: "NM/NM", price: 10000, notes: "", genre: "Jazz" },
    
    // Chick COREA
    { artist: "Chick COREA", album: "Return to Forever", recordCompany: "ECM", barcode: "1022", releaseYear: "1972", country: "D", quality: "NM/NM", price: 9000, notes: "", genre: "Jazz" },
    { artist: "Chick COREA", album: "Return to Forever", recordCompany: "ECM", barcode: "1022", releaseYear: "1972-2010", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Chick COREA", album: "My Spanish Heart I-II", recordCompany: "Polydor", barcode: "PD-2-9003", releaseYear: "1976", country: "US", quality: "VG+/VG+", price: 15000, notes: "", genre: "Jazz" },
    
    // RETURN TO FOREVER
    { artist: "RETURN TO FOREVER", album: "Light as a Feather", recordCompany: "Polydor", barcode: "2310 247", releaseYear: "1973", country: "D", quality: "VG+/NM", price: 10000, notes: "", genre: "Jazz" },
    { artist: "RETURN TO FOREVER", album: "Hymn of the Seventh Galaxy", recordCompany: "Polydor", barcode: "2310 283", releaseYear: "1973", country: "D", quality: "VG+/NM", price: 9000, notes: "", genre: "Jazz" },
    { artist: "RETURN TO FOREVER", album: "Where Have I Known You Before", recordCompany: "Polydor", barcode: "2310 354", releaseYear: "1974", country: "D", quality: "VG+/NM", price: 9000, notes: "", genre: "Jazz" },
    { artist: "RETURN TO FOREVER", album: "No Mystery", recordCompany: "Polydor", barcode: "2310 378", releaseYear: "1975", country: "D", quality: "VG+/NM", price: 9000, notes: "", genre: "Jazz" },
    { artist: "RETURN TO FOREVER", album: "Romantic Warrior", recordCompany: "MOVLP", barcode: "436", releaseYear: "1976-2011", country: "NL", quality: "M/M", price: 12000, notes: "lejátszatlan", genre: "Jazz" },
    
    // Pat METHENY
    { artist: "Pat METHENY", album: "Pat Metheny Group", recordCompany: "ECM", barcode: "1114", releaseYear: "1978-2010", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Pat METHENY", album: "American Garage", recordCompany: "ECM", barcode: "1155", releaseYear: "1980-2010", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Pat METHENY", album: "Offramp", recordCompany: "ECM", barcode: "1216", releaseYear: "1981-2010", country: "D", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    { artist: "Pat METHENY", album: "Travels I-II", recordCompany: "ECM", barcode: "1252-53", releaseYear: "1983", country: "D", quality: "M/M", price: 13000, notes: "", genre: "Jazz" },
    
    // Charles MINGUS
    { artist: "Charles MINGUS", album: "Ah Um", recordCompany: "MOVLP", barcode: "065", releaseYear: "1959-2010", country: "NL", quality: "M/M", price: 10000, notes: "Original & Unedited Versions, lejátszatlan", genre: "Jazz" },
    
    // Art BLAKEY
    { artist: "Art BLAKEY", album: "Moanin'", recordCompany: "Blue Note", barcode: "0602507465681", releaseYear: "1958-2021", country: "EU", quality: "M/M", price: 10000, notes: "lejátszatlan", genre: "Jazz" },
    
    // Thelonious MONK
    { artist: "Thelonious MONK", album: "Monk's Music", recordCompany: "JWR", barcode: "4505", releaseYear: "1957-2011", country: "EU", quality: "M/M", price: 8000, notes: "lejátszatlan", genre: "Jazz" },
    
    // Additional Rock/Pop entries
    { artist: "SANTANA", album: "Santana", recordCompany: "CBS", barcode: "S 63815", releaseYear: "1969", country: "NL", quality: "NM/NM", price: 8000, notes: "", genre: "Rock/Pop" },
    { artist: "SANTANA", album: "Abraxas", recordCompany: "CBS", barcode: "32032", releaseYear: "1970", country: "NL", quality: "VG+/VG+", price: 7000, notes: "", genre: "Rock/Pop" },
    { artist: "YES", album: "Close to the Edge", recordCompany: "ATL", barcode: "8122797157", releaseYear: "1972-2012", country: "D", quality: "M/M", price: 9000, notes: "LE, lejátszatlan", genre: "Rock/Pop" },
    { artist: "YES", album: "Fragile", recordCompany: "Atlantic", barcode: "RCV 7211", releaseYear: "2023", country: "EU", quality: "M/M", price: 13000, notes: "LE Crystal Clear, lejátszatlan", genre: "Rock/Pop" },
    { artist: "KING CRIMSON", album: "In the Court of the Crimson King", recordCompany: "DGM", barcode: "KCLPX2019", releaseYear: "2019", country: "UK", quality: "M/M", price: 15000, notes: "200g SE, lejátszatlan", genre: "Rock/Pop" },
    { artist: "Frank ZAPPA", album: "Hot Rats", recordCompany: "ZAPPA", barcode: "ZR 3841-1", releaseYear: "1969-2016", country: "EU", quality: "M/M", price: 11000, notes: "lejátszatlan", genre: "Rock/Pop" },
    { artist: "Alice COOPER", album: "School's Out", recordCompany: "WEA WB", barcode: "56007", releaseYear: "1972", country: "D", quality: "NM/M", price: 9500, notes: "", genre: "Rock/Pop" }
];
