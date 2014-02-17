uniform sampler2D tex1;
uniform sampler2D tex2;

uniform vec2 iResolution;

void main()
{
  
  vec2 uv = gl_FragCoord.xy/iResolution.xy;
  float aaa= texture2D(tex1,uv).a;
  vec3  ccc= texture2D(tex2,uv).rgb;
  gl_FragColor = vec4(ccc,aaa);
}
