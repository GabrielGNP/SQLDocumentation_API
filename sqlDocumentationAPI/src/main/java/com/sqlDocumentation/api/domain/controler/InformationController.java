package com.sqlDocumentation.api.domain.controler;

import com.sqlDocumentation.api.domain.model.Information;
import com.sqlDocumentation.api.domain.service.InformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/sqlAPI")
public class InformationController {

    @Autowired
    private InformationService informationService;

    @GetMapping(value = "/allClauses")
    public ResponseEntity<List<String>> getAllClauses(){
        List<String> clauses = informationService.getAllClauses();
        return ResponseEntity.status(HttpStatus.OK).body(clauses);
    }

    @GetMapping(value = "/clause_{clauseName}")
    public ResponseEntity<Information> getClauseInformation(@PathVariable String clauseName){
        return ResponseEntity.status(HttpStatus.OK).body(informationService.getClauses(clauseName));
    }

    @GetMapping(value = "/allClausesInformation")
    public ResponseEntity<List<Information>> getAllClausesInformation(){
        return ResponseEntity.status(HttpStatus.OK).body(informationService.getAllClausesInformation());
    }

    @PostMapping(value = "/saveClause")
    public ResponseEntity<Boolean> saveNewClause(@RequestBody Information information){
        return ResponseEntity.status(HttpStatus.OK).body(informationService.saveClause(information));
    }
}
