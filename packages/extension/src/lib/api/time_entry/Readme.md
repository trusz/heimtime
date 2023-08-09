```txt
                                                                                     Form- or                                  
                                                 ┌─────────────────────────────────────time ────────────────────┐              
                                                 │                                    changes                   │              
                                                 ▼                                                              │              
                         ┌─────────────────────────┐                    ┌────────────┐                   ┌────────────┐        
        create event     │                         │      Form          │            │                   │            │        
 ○ ─────────────────────▶│       IN PROGRESS       │────finished───────▶│   SAVING   │────Status: 200───▶│   STABLE   │────▶ ◍ 
                         │                         │                    │            │                   │            │        
                         └─────────────────────────┘                    └────────────┘                   └────────────┘        
                          ▲  │      ▲ │          ▲                             │                                               
                          │  │      │ │          │                             │                                               
                      creation      Form         │                         Status:                                             
                     progression  Changes        │                           500                                               
                          │  │      │ │          │                             │                                               
                          └──┘      └─┘          │                             │                                               
                                                 │                             ▼                                               
                                                 │                      ┌────────────┐                                         
                                                 │     Form- or         │            │                                         
                                                 └───────time ──────────│   ERROR    │                                         
                                                        changes         │            │                                         
                                                                        └────────────┘                                         
```

```txt
                                                    ┌─────────────────────────<events:error/stable>─────────────────────────┐      
                                                    │                                                                       │      
                                                    ▼                                    Λ                                  │      
                                             ┌────────────┐                             ╱ ╲                          ┌────────────┐
 After saving all event in─ ─ ─ ─ ┐          │            │                            ╱   ╲                         │            │
 the backend we create a                     │Final Events│────────<events>──────────▶▕     ▏────<events:saving>────▶│     API    │
 new snapshot for the "In         │          │            │                            ╲   ╱                         │            │
 Progress Events" store to                   └────────────┘                             ╲ ╱                          └────────────┘
 bring both store to the          │            │        ▲                                V                                         
 same state                        ─ ─ ─ ─ ─Events      │                             Filter:                                      
                                           Snapshot     │                           State==Savin                                   
                                               │        │                                                                          
 When we finished modifying ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│─  Events to                                                                       
 an event all affected                         │     commit                                                                        
 events must be saved                          ▼        │                                                                          
                                             ┌────────────┐                               ┌────────────┐                           
                                             │            │◀──────<changed event>─────────│            │                           
                                             │In Progress │                               │     UI     │                           
                                             │   Events   │                               │            │                           
                                             │            │───────<affected events>──────▶│            │                           
                                             └────────────┘                 │             └────────────┘                           
                                                                                                                                   
                                                                            │                                                      
                                                                                                                                   
                                                                            │                                                      
                                                                             ─ ─ A change can affect                               
                                                                                 multiple events                                   
                                                                                                                                   
```