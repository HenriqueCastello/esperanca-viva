montageDefine("1855034","core/serialization",{dependencies:["core/deprecate","./serialization/serializer/montage-serializer","./serialization/deserializer/montage-deserializer"],factory:function(e,t){var n=e("core/deprecate");n.deprecationWarning("montage/core/serialization","montage/core/serialization/serializer/montage-serializer"),n.deprecationWarning("montage/core/serialization","montage/core/serialization/deserializer/montage-deserializer");var r=e("./serialization/serializer/montage-serializer").MontageSerializer,i=e("./serialization/serializer/montage-serializer").serialize,a=e("./serialization/deserializer/montage-deserializer").MontageDeserializer,o=e("./serialization/deserializer/montage-deserializer").deserialize;t.Serializer=r,t.serialize=i,t.Deserializer=a,t.deserialize=o}});