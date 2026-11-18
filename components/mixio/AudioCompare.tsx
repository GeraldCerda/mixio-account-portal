"use client";
import { useEffect, useRef, useState } from "react";
const sources=["/assets/audio/dance-demo-bypassed.mp3","/assets/audio/dance-demo-mixio.mp3"];
export default function AudioCompare(){
 const audio=useRef<HTMLAudioElement|null>(null);
 const [selected,setSelected]=useState(0);
 const [playing,setPlaying]=useState(false);
 const [time,setTime]=useState(0);
 const [duration,setDuration]=useState(0);
 const change=(next:number)=>{const el=audio.current;if(!el)return;const current=el.currentTime;const active=!el.paused;el.pause();el.src=sources[next];el.load();el.currentTime=current;setSelected(next);if(active)void el.play().catch(()=>setPlaying(false));};
 useEffect(()=>{const el=audio.current;if(!el)return;const update=()=>setTime(el.currentTime);const meta=()=>{setDuration(el.duration||0);if(el.currentTime>0)setTime(el.currentTime)};const ended=()=>setPlaying(false);const play=()=>setPlaying(true);const pause=()=>setPlaying(false);el.addEventListener("timeupdate",update);el.addEventListener("loadedmetadata",meta);el.addEventListener("ended",ended);el.addEventListener("play",play);el.addEventListener("pause",pause);return()=>{el.pause();el.removeEventListener("timeupdate",update);el.removeEventListener("loadedmetadata",meta);el.removeEventListener("ended",ended);el.removeEventListener("play",play);el.removeEventListener("pause",pause)}},[]);
 const toggle=()=>{const el=audio.current;if(!el)return;if(el.paused)void el.play().catch(()=>setPlaying(false));else el.pause()};
 const fmt=(v:number)=>`${Math.floor(v/60)}:${String(Math.floor(v%60)).padStart(2,"0")}`;
 return <div className="compare"><div className="compare-heading"><span className="eyebrow">REAL AUDIO · SAME PERFORMANCE</span><h2>Hear the difference.</h2><p>Switch between the original and Mixio while maintaining your place in the track.</p></div><div className="compare-tabs" role="group" aria-label="Audio comparison"><button type="button" className={selected===0?"active":""} onClick={()=>change(0)}>Original mix</button><button type="button" className={selected===1?"active":""} onClick={()=>change(1)}>Mixio processed</button></div><div className="transport"><button type="button" className="play" onClick={toggle} aria-label={playing?"Pause audio":"Play audio"}>{playing?"Ⅱ":"▶"}</button><input aria-label="Audio seek position" type="range" min="0" max={duration||1} step="0.1" value={Math.min(time,duration||0)} onChange={e=>{const el=audio.current;if(el)el.currentTime=Number(e.target.value);setTime(Number(e.target.value))}}/><span>{fmt(time)} / {fmt(duration)}</span></div><audio ref={audio} preload="metadata" src={sources[0]}/><p className="compare-note">No audio plays automatically. Both recordings are included with this preview.</p></div>
}
